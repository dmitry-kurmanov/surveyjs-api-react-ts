import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-creator-core/i18n/russian";
import { useSelector } from "react-redux";
import DoneOutline from '@mui/icons-material/DoneOutline';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

import { ISurvey } from "../../state-container/api-slices/surveyjsAPI.ts";
import { surveyjsAccessKey } from "../../state-container/api-slices/surveyjsAPI.ts";
import { RootState } from "../../state-container/store.ts";
import "./SurveysCreator.scss";
import getTexts from "../../localization/localization.ts";
import { useState } from "react";
import { useGetActiveSurveysQuery } from "../../state-container/api-slices/surveyjsAPI.ts";

declare global {
  interface Window { creator: SurveyCreator; }
}

const creatorOptions = {
  isAutoSave: true,
  showLogicTab: true,
  showTranslationTab: true,
};

const creatorDarkThemeCssVariables = {
  /* SurveyJS Creator V2 */
  "--primary": "#1ab7fa",
  "--primary-light": "rgba(26, 183, 250, 0.1)",
  "--foreground": "#ededed",
  "--primary-foreground": "#ffffff",
  "--secondary": "#1ab7fa",
  "--background": "#555555",
  "--background-dim": "#4d4d4d",
  "--background-dim-light": "#4d4d4d",
} as React.CSSProperties;

export default function SurveysCreator({ survey }: { survey: ISurvey }) {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const theme = useSelector((state: RootState) => state.settings.value.theme);
  const { surveyNameLabel, editSurveyNameLabel, saveSurveyNameLabel } = getTexts(locale).surveyCreator;
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [surveyName, setSurveyName] = useState(survey.Name);

  const { refetch: activeSurveysRefetch,  } = useGetActiveSurveysQuery();

  //https://stackoverflow.com/a/7394787/6623551
  function decodeHtml(html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const creator = new SurveyCreator(creatorOptions);
  creator.locale = locale;
  creator.text = decodeHtml(survey.Json);
  creator.saveSurveyFunc = (
    saveNo: number,
    callback: (no: number, isSuccess: boolean) => void,
  ) => {
    fetch(
      `https://api.surveyjs.io/private/Surveys/changeJson?accessKey=${surveyjsAccessKey}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Id: survey.Id,
          Text: JSON.stringify(creator.JSON).replace("'", '"'),
          JSON: JSON.stringify(creator.JSON).replace("'", '"'),
        }),
      },
    ).then((/*data*/) => {
      callback(saveNo, true);
    });
  };
  window.creator = creator;

  const startSurveyNameEditing = ()=> {
    setIsNameEditing(true);
  };
  const stopSurveyNameEditing = ()=> {
    const input = document.getElementById("new-survey-name") as HTMLInputElement;
    if (!input || !input.value) { 
      setIsNameEditing(false);
      return;
    }
    fetch(
      `https://api.surveyjs.io/private/Surveys/changeName/${survey.Id}?accessKey=${surveyjsAccessKey}&name=${input.value}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        }
      },
    ).then((/*data*/) => {
      setSurveyName(input.value);
      setIsNameEditing(false);
      activeSurveysRefetch();
    });
  };

  return (
    <section
      className="survey-creator-container"
      style={theme === "dark" ? creatorDarkThemeCssVariables : {}}
    >
      <div className={`survey-creator-info ${isNameEditing ? "survey-creator-info--editing": ""}`}>
        <div className="survey-creator-info__name-container">
          <span className="survey-creator-info__name-label">{surveyNameLabel}:</span>
          <h3 className="survey-creator-info__name">{surveyName}</h3>
          <IconButton onClick={startSurveyNameEditing} color="secondary" aria-label={editSurveyNameLabel}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>

        <div className="survey-creator-info__edit-name-container">
          <TextField
            label={surveyNameLabel}
            id="new-survey-name"
            defaultValue={surveyName}
            size="small"
          />
          <IconButton onClick={stopSurveyNameEditing} color="secondary" aria-label={saveSurveyNameLabel}>
            <DoneOutline fontSize="small" />
          </IconButton>
        </div>
      </div>
      <SurveyCreatorComponent creator={creator} />
    </section>
  );
}
