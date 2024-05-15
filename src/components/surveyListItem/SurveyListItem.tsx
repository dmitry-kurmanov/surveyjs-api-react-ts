import { Link } from "react-router-dom";

import './SurveyListItem.scss';

import localization from '../../localization/english.ts';
import { surveyjsAccessKey } from "../../accessKey.ts";

interface ISurveyListItem {
  name: string,
  id: string,
  isPublished: boolean,
}

export default function SurveyListItem({ name, id, isPublished }: ISurveyListItem) {
  const editLinkText = localization.surveyListItem.editLinkText;

  function runSurvey(event: React.MouseEvent<HTMLButtonElement>) {
    if (isPublished) {
      window.open(`https://surveyjs.io/published?id=${id}`, '_blank');
    } else {
      //`https://api.surveyjs.io/private/Surveys/publish/${id}?accessKey=${surveyjsAccessKey}`
    }
  }

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{name}</span>
      <div className="survey-list-item__buttons-container">
        <button className="survey-list-item__button survey-list-item__button--orange" onClick={runSurvey}>Run</button>
        <Link to={`/edit-survey/${id}`} className="survey-list-item__button">{editLinkText}</Link>
      </div>
    </li>
  );
}
