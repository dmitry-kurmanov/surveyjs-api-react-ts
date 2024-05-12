import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

import { ISurvey } from '../../slices/surveysSlice.ts'


const creatorOptions = {
  isAutoSave: true
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

  return <>
    <h1>{survey.Name}</h1>
    <SurveyCreatorComponent creator={creator} />
  </>
}
