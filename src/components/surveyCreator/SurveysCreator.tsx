import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

import {ISurvey} from '../surveyList/SurveysList.tsx'


const creatorOptions = {
  isAutoSave: true
};


export default function SurveysCreator({survey}: {survey:ISurvey}) {

  const creator = new SurveyCreator(creatorOptions);

  return <SurveyCreatorComponent creator={creator} />
}
