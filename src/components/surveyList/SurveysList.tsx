import { useSelector } from "react-redux";

import type { RootState } from "../../state-container/store.ts";
import { ISurvey } from "../../state-container/api-slices/surveyjsAPI.ts";
import { useGetActiveSurveysQuery, useAddNewSurveyMutation } from "../../state-container/api-slices/surveyjsAPI.ts";
import "./SurveyList.scss";
import getTexts from "../../localization/localization.ts";
import SurveyListItem from "../surveyListItem/SurveyListItem.tsx";
import CircularProgress from "@mui/material/CircularProgress";
import Error404Page from "../../routes/Error404Page.tsx";
import CreateSurveyButton from "./CreateSurveyButton.tsx";

export default function SurveysList() {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const { noSurveysText, title, createSurveyLabel } = getTexts(locale).surveysList;

  const {
    data: activeSurveys,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetActiveSurveysQuery();

  const [addNewSurvey, { isLoading: isAddingNewPost }] = useAddNewSurveyMutation();

  let content;

  if (isLoading || isAddingNewPost) {
    content = <CircularProgress />;
  } else if (isError) {
    content = <Error404Page customStatusText={error.toString()} />;
  } else if (isSuccess && activeSurveys.length === 0) {
    content = (
      <div className="survey-list-no-surveys-container">
        <h2>{noSurveysText}</h2>
        <div>
          <CreateSurveyButton label={createSurveyLabel} onClickHandler={addNewSurvey}/>
        </div>
      </div>
    );
  } else if (isSuccess && activeSurveys.length > 0) {
    const items = activeSurveys.map((survey: ISurvey) => (
      <SurveyListItem key={survey.Id} name={survey.Name} id={survey.Id} />
    ));
    content = (
      <div className="survey-list-container">
        <div className="survey-list-header">
          <h1>{title}</h1>
          <CreateSurveyButton label={createSurveyLabel} onClickHandler={addNewSurvey}/>
        </div>
        <ul className="survey-list">{items}</ul>
      </div>
    );
  } else {
    content = <Error404Page />;
  }

  return <>{content}</>;
}
