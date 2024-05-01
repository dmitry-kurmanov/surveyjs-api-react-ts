import { useEffect, useState } from 'react';
import SurveyListItem from '../listItem/SurveyListItem.tsx';

import './SurveyList.scss';

import localization from '../localization/english.ts';

interface ISurvey {
  Id: string;
  Name: string;
}

export default function SurveysList() {
  const noSurveysText = localization.surveysList.noSurveysText;

  const [surveys, setSurveys] = useState<ISurvey[]>([]);

  useEffect(() => {
    getActiveSurveys();
  }, []);

  async function getActiveSurveys() {
    const accessKey = 'f60db1fb75f440eaaddc46bfca1a8c03';
    const url = `https://api.surveyjs.io/private/Surveys/getActive?accessKey=${accessKey}`;

    const data: any = await fetch(url);
    const activeSurveys: ISurvey[] = await data.json();
    setSurveys(activeSurveys);
  }

  if (surveys.length === 0) return <div>{noSurveysText}</div>;

  const items = surveys.map((survey: ISurvey) => (
    <SurveyListItem id={survey.Id} name={survey.Name} />
  ));

  return <ul className="survey-list">{items}</ul>;
}
