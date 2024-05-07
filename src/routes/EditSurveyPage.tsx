import { useLocation, useParams } from 'react-router';
import { Link } from "react-router-dom";

import localization from '../localization/english.ts';

import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'

export default function EditSurvey() {
    const params = useParams();
    const goBackLinkText = localization.editSurveyPage.goBackLinkText;

    const surveyId = params.surveyId as string;

    // TODO get survey from Store and if json not exists then show "loading text"
    // then load survey JSON from GET https://api.surveyjs.io/public/Survey/getSurvey?surveyId={surveyId}
    // then set JSON to Store (SurveysSlice)

    return <div>
        <Link to="/">{goBackLinkText}</Link>

        <SurveyCreator survey={{Id: "some", Name: "some", Json: "some"}} />
    </div>
}