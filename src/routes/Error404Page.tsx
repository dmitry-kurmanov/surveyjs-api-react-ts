import { useRouteError } from "react-router-dom";

import getTexts from '../localization/localization.ts';

interface IRouteError {
    statusText: string;
    message: string;
}

export default function ErrorPage404({ customStatusText }: { customStatusText: string }) {
    const {title, subTitle} = getTexts().errorPage;

    const error:IRouteError = useRouteError() as IRouteError;
    console.error(error);

    return (
        <div id="error-page">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>
            <i>{customStatusText || error.statusText || error.message}</i>
          </p>
          <a href="/">Go To Home Page</a>
        </div>
      );
}