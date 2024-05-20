import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../state-container/store.ts'
import { surveyjsAccessKey } from '../accessKey.ts'
import getTexts from '../localization/localization.ts';
import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'
import Error404Page from './Error404Page.tsx'
import { ISurvey, updateSurveyJson } from '../state-container/slices/surveysSlice.ts'

interface ISurveyInfo {
    Info: {
        UpdatedOn: string
    },
    Json: string
}

export default function EditSurvey() {
    const surveys = useSelector((state: RootState) => state.surveys.value);
    const params = useParams();
    const dispatch = useDispatch();
    const [isSurveyInfoFetched, setIsSurveyInfoFetched] = useState(false);

    const { goBackLinkText, surveyJsonLoadingText, surveyIsNotFound } = getTexts().editSurveyPage;

    const surveyId = params.surveyId as string;
    const survey: ISurvey | undefined = surveys.find((s) => s.Id === surveyId);

    if (typeof survey === "undefined") {
        return <Error404Page customStatusText={surveyIsNotFound}/>;
    }

    useEffect(() => {
        getSurveyJson(surveyId);
    }, []);

    async function getSurveyJson(id: string) {
        const data = await fetch(`https://api.surveyjs.io/private/Surveys/getSurveyInfo?accessKey=${surveyjsAccessKey}&surveyId=${id}`);
        let dataJson: ISurveyInfo = await data.json();
        if (!isSurveyInfoFetched) {
            dispatch(updateSurveyJson({ Id: id, Json: dataJson.Json }))
        }
        setIsSurveyInfoFetched(true);
    }

    if (!isSurveyInfoFetched) return <div>{surveyJsonLoadingText}</div>;

    return <div>
        <Link to="/">{goBackLinkText}</Link>
        <SurveyCreator survey={survey} />
    </div>
}