import { useEffect, useState } from 'react';
import SurveyListItem from '../surveyListItem/SurveyListItem.tsx';

import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store.ts'
import { setSurveys } from '../../slices/surveysSlice.ts'

import './SurveyList.scss';

import localization from '../../localization/english.ts';

export interface ISurvey {
  Id: string;
  Name: string;
  Json: string;
}

export default function SurveysList() {
  const surveys = useSelector((state:RootState) => state.surveys.value);
  const dispatch = useDispatch();

  const noSurveysText = localization.surveysList.noSurveysText;

  useEffect(() => {
    getActiveSurveys();
  }, []);

  async function getActiveSurveys() {
    if (surveys.length !== 0) return;
    const accessKey = 'f60db1fb75f440eaaddc46bfca1a8c03';
    const url = `https://api.surveyjs.io/private/Surveys/getActive?accessKey=${accessKey}`;

    const data: any = await fetch(url);
    let activeSurveys: ISurvey[] = await data.json();
    dispatch(setSurveys(activeSurveys))
  }

  if (surveys.length === 0) return <div>{noSurveysText}</div>;

  const items = surveys.map((survey: ISurvey) => (
    <SurveyListItem key={survey.Id} survey={survey}/>
  ));

  return <ul className="survey-list">{items}</ul>;
}
