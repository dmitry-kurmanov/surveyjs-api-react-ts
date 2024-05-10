import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '../store.ts'
import localization from '../localization/english.ts';
import SurveyCreator from '../components/surveyCreator/SurveysCreator.tsx'
import { ISurvey } from '../components/surveyList/SurveysList.tsx';
import Error404Page from './Error404Page.tsx'
import { updateSurveyJson } from '../slices/surveysSlice.ts'


export default function EditSurvey() {
    const surveys = useSelector((state: RootState) => state.surveys.value);
    const params = useParams();
    const dispatch = useDispatch();

    const { goBackLinkText, surveyJsonLoadingText } = localization.editSurveyPage;

    const surveyId = params.surveyId as string;
    const survey: ISurvey | undefined = surveys.find((s) => s.Id === surveyId);

    if (typeof survey === "undefined") {
        return <Error404Page />;
    }

    let json = survey.Json;

    useEffect(() => {
        if (json) return;
        getSurveyJson(surveyId);
    }, []);

    async function getSurveyJson(id: string) {
        const data = await fetch(`https://api.surveyjs.io/public/Survey/getSurvey?surveyId=${id}`);
        let newJson: string = await data.json();
        dispatch(updateSurveyJson({ Id: id, Json: newJson }))
    }

    if (!json) return <div>{surveyJsonLoadingText}</div>;

    return <div>
        <Link to="/">{goBackLinkText}</Link>
        <SurveyCreator survey={survey} />
    </div>
}