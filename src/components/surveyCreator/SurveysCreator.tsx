import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-creator-core/i18n/russian";
import { useSelector } from "react-redux";
import EditIcon from '@mui/icons-material/Edit';

import { ISurvey } from "../../state-container/api-slices/surveyjsAPI.ts";
import { surveyjsAccessKey } from "../../state-container/api-slices/surveyjsAPI.ts";
import { RootState } from "../../state-container/store.ts";
import "./SurveysCreator.scss";
import IconButton from "@mui/material/IconButton";

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

  //https://stackoverflow.com/a/7394787/6623551
  function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
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
  (window as any).creator = creator;

  return (
    <section
      className="survey-creator-container"
      style={theme === "dark" ? creatorDarkThemeCssVariables : {}}
    >
      <div className="survey-creator-info">
        <h3 className="survey-list-name">{survey.Name}</h3>
        <IconButton color="secondary" aria-label="add an alarm">
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
      <SurveyCreatorComponent creator={creator} />
    </section>
  );
}
