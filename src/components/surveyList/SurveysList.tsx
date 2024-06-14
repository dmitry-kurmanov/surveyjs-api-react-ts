import { useEffect } from "react";
import SurveyListItem from "../surveyListItem/SurveyListItem.tsx";

import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../../state-container/store.ts";
import {
  ISurvey,
  setSurveys,
} from "../../state-container/slices/surveysSlice.ts";
import { surveyjsAccessKey } from "../../accessKey.ts";

import "./SurveyList.scss";

import getTexts from "../../localization/localization.ts";

export default function SurveysList() {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const surveys = useSelector((state: RootState) => state.surveys.value);
  const dispatch = useDispatch();

  const { noSurveysText, title } = getTexts(locale).surveysList;

  useEffect(() => {
    if (surveys.length !== 0) return;
    getActiveSurveys();
  }, []);

  async function getActiveSurveys() {
    const url = `https://api.surveyjs.io/private/Surveys/getActive?accessKey=${surveyjsAccessKey}`;
    const data = await fetch(url);
    let activeSurveys: ISurvey[] = await data.json();
    dispatch(setSurveys(activeSurveys));
  }

  if (surveys.length === 0) {
    return (
      <div className="survey-list-no-surveys-container">
        <h2>{noSurveysText}</h2>
      </div>
    );
  }

  const items = surveys.map((survey: ISurvey) => (
    <SurveyListItem key={survey.Id} name={survey.Name} id={survey.Id} />
  ));

  return (
    <>
      <div className="survey-list-container">
        <h1>{title}</h1>
        <ul className="survey-list">{items}</ul>
      </div>
    </>
  );
}
