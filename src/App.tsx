import React, { useMemo } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as ReduxProvider } from 'react-redux'
import store from './state-container/store.ts'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Header from './components/header/Header.tsx'
import RootPage from './routes/RootPage.tsx'
import Error404Page from './routes/Error404Page.tsx'
import EditSurveyPage from './routes/EditSurveyPage.tsx'
import Footer from './components/footer/Footer.tsx'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./localization/english.ts"
import "./localization/russian.ts"

import './App.scss'
import { useMediaQuery } from '@mui/material'

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
  ])

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  return (
    <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <RouterProvider router={router} />
        </main>
        <Footer />
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
  );
}
