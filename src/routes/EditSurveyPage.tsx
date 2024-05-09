import { useLocation, useParams } from 'react-router';
import { Link } from "react-router-dom";

import type { RootState } from '../store.ts'
import { useSelector } from 'react-redux'

import localization from '../localization/english.ts';

import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'
import { ISurvey } from '../components/surveyList/SurveysList.tsx';

import Error404Page from './Error404Page.tsx'

export default function EditSurvey() {
    const surveys = useSelector((state:RootState) => state.surveys.value);

    const params = useParams();
    const goBackLinkText = localization.editSurveyPage.goBackLinkText;

    const surveyId = params.surveyId as string;

    const survey:ISurvey | undefined = surveys.find((s)=>s.Id === surveyId);

    if (typeof survey === "undefined") {
        return <Error404Page />;
    }

    if (!survey.Json) {
        // then load survey JSON from GET https://api.surveyjs.io/public/Survey/getSurvey?surveyId={surveyId}
        // then set JSON to Store (SurveysSlice)
    }

    return <div>
        <Link to="/">{goBackLinkText}</Link>
        <SurveyCreator survey={survey} />
    </div>
}