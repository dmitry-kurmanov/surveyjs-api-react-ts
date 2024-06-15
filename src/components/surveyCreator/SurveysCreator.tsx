import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import "survey-creator-core/survey-creator-core.i18n";
import "survey-creator-core/i18n/russian";
import { useSelector } from "react-redux";

import { ISurvey } from "../../state-container/slices/surveysSlice.ts";
import { surveyjsAccessKey } from "../../accessKey.ts";
import { RootState } from "../../state-container/store.ts";
import "./SurveysCreator.scss";

const creatorOptions = {
  isAutoSave: true,
  showLogicTab: true,
  showTranslationTab: true,
};

export default function SurveysCreator({ survey }: { survey: ISurvey }) {
  const locale = useSelector((state: RootState) => state.settings.value.locale);

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
    <div className="survey-creator-container">
      <div className="survey-creator-info">
        <h3 className="survey-list-name">{survey.Name}</h3>
      </div>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
