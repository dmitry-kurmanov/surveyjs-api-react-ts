import './SurveyListItem.scss';

import localization from '../../localization/english.ts';

interface ISurveyListItem {
  name: string;
}

export default function SurveyListItem({ name }: ISurveyListItem) {
  const editButtonText = localization.surveyListItem.editButtonText;

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{name}</span>
      <button className="survey-list-item__button">{editButtonText}</button>
    </li>
  );
}
