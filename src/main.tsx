import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as ReduxProvider } from 'react-redux'
import store from './store.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './routes/Root.tsx'
import ErrorPage404 from './routes/ErrorPage404.tsx';
import EditSurvey from './routes/EditSurvey.tsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage404 />
  },
  {
    path: "edit-survey/:surveyId",
    element: <EditSurvey />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </React.StrictMode>,
)
