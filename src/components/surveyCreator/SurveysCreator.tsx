import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

import { ISurvey } from '../../state-container/slices/surveysSlice.ts'
import { surveyjsAccessKey } from '../../accessKey.ts'


const creatorOptions = {
  isAutoSave: true,
  showLogicTab: true,
  showTranslationTab: true
};


export default function SurveysCreator({ survey }: { survey: ISurvey }) {

  //https://stackoverflow.com/a/7394787/6623551
  function decodeHtml(html: string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const creator = new SurveyCreator(creatorOptions);
  creator.text = decodeHtml(survey.Json);
  creator.saveSurveyFunc = (saveNo: number, callback: (no: number, isSuccess: boolean) => void) => {
    fetch(`https://api.surveyjs.io/private/Surveys/changeJson?accessKey=${surveyjsAccessKey}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
       },
      body: JSON.stringify({
        Id: survey.Id,
        Text: JSON.stringify(creator.JSON).replace("'", '"'),
        JSON: JSON.stringify(creator.JSON).replace("'", '"')
      })
    }).then((/*data*/) => {
      callback(saveNo, true);
    });
  };

  return <>
    <h1>{survey.Name}</h1>
    <SurveyCreatorComponent creator={creator} />
  </>
}
