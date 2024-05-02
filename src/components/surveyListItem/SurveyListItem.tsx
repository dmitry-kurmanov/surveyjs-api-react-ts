import './SurveyListItem.scss';

import localization from '../../localization/english.ts';

interface ISurveyListItem {
  id: string;
  name: string;
}

export default function SurveyListItem({ id, name }: ISurveyListItem) {
  const editLinkText = localization.surveyListItem.editLinkText;

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{name}</span>
      <a href={`/edit-survey/${id}`} className="survey-list-item__edit-link">{editLinkText}</a>
    </li>
  );
}
