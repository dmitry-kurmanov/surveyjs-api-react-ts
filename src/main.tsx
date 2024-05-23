import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as ReduxProvider } from 'react-redux'
import store from './state-container/store.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootPage from './routes/RootPage.tsx'
import Error404Page from './routes/Error404Page.tsx';
import EditSurveyPage from './routes/EditSurveyPage.tsx';

import "./localization/english.ts";
import "./localization/russian.ts";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Error404Page />
  },
  {
    path: "edit-survey/:surveyId",
    element: <EditSurveyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
)
