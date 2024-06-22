import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../state-container/store.ts";
import {
  useGetActiveSurveysQuery,
  useGetSurveyInfoQuery
} from "../state-container/api-slices/surveyjsAPI.ts";
import getTexts from "../localization/localization.ts";
import SurveyCreator from "../components/surveyCreator/SurveysCreator.tsx";
import Error404Page from "./Error404Page.tsx";
import { ISurvey } from "../state-container/api-slices/surveyjsAPI.ts";
import CircularProgress from "@mui/material/CircularProgress";

export default function EditSurvey() {
  const params = useParams();
  const surveyId = params.surveyId as string;

  const locale = useSelector((state: RootState) => state.settings.value.locale);

  const { surveyIsNotFound } = getTexts(locale).editSurveyPage;
  const { data: surveyInfo, isLoading, isSuccess, isError, error } =
    useGetSurveyInfoQuery();

  if (isLoading) return <CircularProgress />;

  if (isError)
    return (
      <Error404Page customStatusText={(error && error.toString()) || ""} />
    );

  if (isSuccess && typeof surveyInfo === "undefined")
    return <Error404Page customStatusText={surveyIsNotFound} />;

  if (isSuccess && typeof surveyInfo !== "undefined")
    return <SurveyCreator surveyId={surveyId} surveyJSON={surveyInfo.Json} />;

  return <Error404Page />;
}
