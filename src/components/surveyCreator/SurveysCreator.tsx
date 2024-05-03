interface ISurvey {
  surveyId: string;
  surveyJson: string;
}

export default function SurveysCreator({surveyId, surveyJson}: ISurvey) {
  return <div>
    <div>survey id: {surveyId}</div>
    <div>survey json: {surveyJson}</div>
</div>;
}
