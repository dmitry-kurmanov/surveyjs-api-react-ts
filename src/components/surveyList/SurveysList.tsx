import { useEffect } from 'react';
import SurveyListItem from '../surveyListItem/SurveyListItem.tsx';

import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store.ts'
import { setSurveys } from '../../slices/surveysSlice.ts'
import { surveyjsAccessKey } from '../../accessKey.ts'

import './SurveyList.scss';

import localization from '../../localization/english.ts';

export interface ISurvey {
  Id: string;
  Name: string;
  Json: string;
  UpdatedOn: string;
}

export default function SurveysList() {
  const surveys = useSelector((state:RootState) => state.surveys.value);
  const dispatch = useDispatch();

  const noSurveysText = localization.surveysList.noSurveysText;
  const title = localization.surveysList.title;

  useEffect(() => {
    if (surveys.length !== 0) return;
    getActiveSurveys();
  }, []);

  async function getActiveSurveys() {
    const url = `https://api.surveyjs.io/private/Surveys/getActive?accessKey=${surveyjsAccessKey}`;
    const data = await fetch(url);
    let activeSurveys: ISurvey[] = await data.json();
    dispatch(setSurveys(activeSurveys))
  }

  if (surveys.length === 0) return <div>{noSurveysText}</div>;

  const items = surveys.map((survey: ISurvey) => (
    <SurveyListItem key={survey.Id} name={survey.Name} id={survey.Id}/>
  ));

  return <>
    <h1>{title}</h1>
    <ul className="survey-list">{items}</ul>
  </>
}
