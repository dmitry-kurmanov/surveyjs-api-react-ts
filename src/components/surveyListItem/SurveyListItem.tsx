import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

import "./SurveyListItem.scss";
import getTexts from "../../localization/localization.ts";
import { RootState } from "../../state-container/store.ts";

// import { surveyjsAccessKey } from "../../state-container/api-slices/surveyjsAPI.ts";

interface ISurveyListItem {
  name: string;
  id: string;
}

export default function SurveyListItem({ name, id }: ISurveyListItem) {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const { editLinkText, runButtonText } = getTexts(locale).surveyListItem;

  async function runSurvey(event: React.MouseEvent<HTMLButtonElement>) {
    // await fetch(`https://api.surveyjs.io/private/Surveys/publish?accessKey=${surveyjsAccessKey}&${id}`, {
    //   method: "PUT",
    // })
    window.open(`https://surveyjs.io/published?id=${id}`, "_blank");
  }

  return (
    <li className="survey-list-item">
      <span className="survey-list-item__name">{name}</span>
      <div className="survey-list-item__buttons-container">
        <Button variant="contained" color="secondary" onClick={runSurvey}>
          {runButtonText}
        </Button>
        <Button
          variant="contained"
          component={RouterLink}
          to={`/edit-survey/${id}`}
        >
          {editLinkText}
        </Button>
      </div>
    </li>
  );
}
