import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";


const creatorOptions = {
  isAutoSave: true
};

interface ISurvey {
  surveyId: string;
  surveyJson: string;
}

export default function SurveysCreator({surveyId, surveyJson}: ISurvey) {

  const creator = new SurveyCreator(creatorOptions);

  return <SurveyCreatorComponent creator={creator} />
}
