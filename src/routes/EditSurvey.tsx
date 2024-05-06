import { useLocation, useParams } from 'react-router';
import { Link } from "react-router-dom";

import localization from '../localization/english.ts';

import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'

export default function EditSurvey() {
    const { surveyIdParam } = useParams();
    let { state } = useLocation();

    const goBackLinkText = localization.editSurveyPage.goBackLinkText;

    const surveyId = surveyIdParam as string;
    const surveyJson = state.json as string;

    return <div>
        <Link to="/">{goBackLinkText}</Link>
        <div>survey id: {surveyId}</div>
        <div>survey json: {surveyJson}</div>
        <SurveyCreator surveyId={surveyId} surveyJson={surveyJson}/>
    </div>
}