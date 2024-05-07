import { Link } from "react-router-dom";

import {ISurvey} from '../surveyList/SurveysList.tsx'

import './SurveyListItem.scss';

import localization from '../../localization/english.ts';


export default function SurveyListItem({survey}: {survey: ISurvey}) {
  const editLinkText = localization.surveyListItem.editLinkText;

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{survey.Name}</span>
      <Link to={`/edit-survey/${survey.Id}`} className="survey-list-item__edit-link">{editLinkText}</Link>
    </li>
  );
}
