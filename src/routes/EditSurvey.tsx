import { useLocation, useParams } from 'react-router';

import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'

export default function EditSurvey() {
    const { surveyIdParam } = useParams();
    let { state } = useLocation();

    const surveyId = surveyIdParam as string;
    const surveyJson = state.json as string;

    return <div>
        <SurveyCreator surveyId={surveyId} surveyJson={surveyJson}/>
        <a href="/">Go Back</a>
    </div>
}