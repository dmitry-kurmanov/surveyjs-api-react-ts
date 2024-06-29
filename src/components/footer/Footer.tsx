import Link from "@mui/material/Link";

import "./Footer.scss";
import getTexts from "../../localization/localization";
import { RootState } from "../../state-container/store";
import { useSelector } from "react-redux";

export default function Footer() {
  const currentLocale = useSelector(
    (state: RootState) => state.settings.value.locale,
  );
  const { haveProblemsText, createIssue} = getTexts(currentLocale).footer;

  return (
    <footer>
      <div>{haveProblemsText}</div>{" "}
      <Link
        href="https://github.com/dmitry-kurmanov/surveyjs-api-react-ts/issues"
        target="_blanc"
      >
        {createIssue}
      </Link>
    </footer>
  );
}
