import { Link as RouterLink, useRouteError } from "react-router-dom";
import Link from "@mui/material/Link";

import getTexts from "../localization/localization.ts";
import { RootState } from "../state-container/store.ts";
import { useSelector } from "react-redux";

interface IRouteError {
  statusText: string;
  message: string;
}

export default function ErrorPage404({
  customStatusText,
}: {
  customStatusText?: string;
}) {
  const locale = useSelector((state: RootState) => state.settings.value.locale);
  const { title, subTitle, goToHome } = getTexts(locale).errorPage;

  const error: IRouteError = useRouteError() as IRouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>
        <i>{customStatusText || error.statusText || error.message}</i>
      </p>
      <Link to="/" component={RouterLink}>
        {goToHome}
      </Link>
    </div>
  );
}
