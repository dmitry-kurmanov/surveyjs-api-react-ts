import { useParams } from "react-router";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import type { RootState } from "../state-container/store.ts";
import {
  useGetActiveSurveysQuery,
  useGetSurveyInfoQuery
} from "../state-container/api-slices/surveyjsAPI.ts";
import getTexts from "../localization/localization.ts";
import SurveyCreator from "../components/surveyCreator/SurveysCreator.tsx";
import Error404Page from "./Error404Page.tsx";
import { ISurvey } from "../state-container/api-slices/surveyjsAPI.ts";

export default function EditSurvey() {
  const params = useParams();
  const surveyId = params.surveyId as string;

  const locale = useSelector((state: RootState) => state.settings.value.locale);

  const { surveyIsNotFound } = getTexts(locale).editSurveyPage;
  const { data: surveyInfo, isLoading: isLoading1, isSuccess: isSuccess1, isError: isError1, error: error1 } =
    useGetSurveyInfoQuery(surveyId);

  const { survey, isLoading: isLoading2, isSuccess: isSuccess2, isError: isError2, error: error2 } =
    useGetActiveSurveysQuery(undefined, {
      selectFromResult: ({ data, isLoading, isSuccess, isError, error }) => ({
        survey: data?.find((survey: ISurvey) => survey.Id === surveyId),
        isLoading,
        isSuccess,
        isError,
        error,
      }),
    });

  if (isLoading1 || isLoading2) return <CircularProgress />;

  if (isError1 || isError2) {
    const error = error1 && error1.toString() || error2 && error2.toString() || ""
    return (
      <Error404Page customStatusText={error} />
    );
  }

  if (isSuccess1 && isSuccess2 && typeof survey === "undefined")
    return <Error404Page customStatusText={surveyIsNotFound} />;

  if (isSuccess1 && isSuccess2 && typeof survey !== "undefined") {
    return <SurveyCreator survey={{Id: surveyId, Json: surveyInfo.Json, Name: survey.Name}} />;
  }

  return <Error404Page />;
}
