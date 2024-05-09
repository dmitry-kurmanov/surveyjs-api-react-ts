import { Link } from "react-router-dom";

import './SurveyListItem.scss';

import localization from '../../localization/english.ts';

interface ISurveyListItem {
  name: string,
  id: string
}

export default function SurveyListItem({name, id}: ISurveyListItem) {
  const editLinkText = localization.surveyListItem.editLinkText;

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{name}</span>
      <Link to={`/edit-survey/${id}`} className="survey-list-item__edit-link">{editLinkText}</Link>
    </li>
  );
}
