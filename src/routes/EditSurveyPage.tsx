import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../state-container/store.ts";
import {
  surveyjsAccessKey,
  useGetActiveSurveysQuery,
} from "../state-container/api-slices/surveyjsAPI.ts";
import getTexts from "../localization/localization.ts";
import SurveyCreator from "../components/surveyCreator/SurveysCreator.tsx";
import Error404Page from "./Error404Page.tsx";
import { ISurvey } from "../state-container/api-slices/surveyjsAPI.ts";
import CircularProgress from "@mui/material/CircularProgress";

interface ISurveyInfo {
  Info: {
    UpdatedOn: string;
  };
  Json: string;
}

export default function EditSurvey() {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const { surveyIsNotFound } = getTexts(locale).editSurveyPage;
  const {
    data: surveys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetActiveSurveysQuery();

  let content;

  if (isLoading) {
    content = <CircularProgress />;
  } else if (isError) {
    content = <Error404Page customStatusText={error.toString()} />;
  } else if (isSuccess && typeof survey === "undefined") {
    <Error404Page customStatusText={surveyIsNotFound} />;
  } else if (isSuccess && typeof survey !== "undefined") {
  } else {
    content = <Error404Page />;
  }

  // if (isError || typeof surveys === "undefined") return;

  // const params = useParams();
  // const dispatch = useDispatch();
  // const [isSurveyInfoFetched, setIsSurveyInfoFetched] = useState(false);

  // const surveyId = params.surveyId as string;
  // const survey: ISurvey | undefined = surveys.find((s) => s.Id === surveyId);

  // if (typeof survey === "undefined") {
  //   return <Error404Page customStatusText={surveyIsNotFound} />;
  // }

  // useEffect(() => {
  //   getSurveyJson(surveyId);
  // }, []);

  // async function getSurveyJson(id: string) {
  //   const data = await fetch(
  //     `https://api.surveyjs.io/private/Surveys/getSurveyInfo?accessKey=${surveyjsAccessKey}&surveyId=${id}`,
  //   );
  //   let dataJson: ISurveyInfo = await data.json();
  //   if (!isSurveyInfoFetched) {
  //     /*dispatch(updateSurveyJson({ Id: id, Json: dataJson.Json }));*/
  //   }
  //   setIsSurveyInfoFetched(true);
  // }

  // if (!isSurveyInfoFetched) return <div>{surveyJsonLoadingText}</div>;
  // return <SurveyCreator survey={survey} />;

  return <section>{content}</section>;
}
