import { useRouteError } from "react-router-dom";

import localization from '../localization/english.ts';

interface IRouteError {
    statusText: string;
    message: string;
}

export default function ErrorPage404() {
    const title = localization.errorPage.title;
    const subTitle = localization.errorPage.subTitle;

    const error:IRouteError = useRouteError() as IRouteError;
    console.error(error);

    return (
        <div id="error-page">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <a href="/">Go To Home Page</a>
        </div>
      );
}