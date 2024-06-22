import React, { useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state-container/store.ts";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/header/Header.tsx";
import RootPage from "./routes/RootPage.tsx";
import Error404Page from "./routes/Error404Page.tsx";
import EditSurveyPage from "./routes/EditSurveyPage.tsx";
import Footer from "./components/footer/Footer.tsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./localization/english.ts";
import "./localization/russian.ts";

import "./App.scss";
import { useMediaQuery } from "@mui/material";
import { setTheme } from "./state-container/slices/settings.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Error404Page />,
  },
  {
    path: "edit-survey/:surveyId",
    element: <EditSurveyPage />,
    errorElement: <Error404Page />,
  },
]);

export default function App() {
  const currentTheme = useSelector(
    (state: RootState) => state.settings.value.theme,
  );
  const dispatch = useDispatch();

  if (currentTheme === null) {
    const userTheme = getUserPreferredTheme();
    dispatch(setTheme(userTheme));
  }

  const theme = createTheme({
    palette: {
      mode: currentTheme === "dark" ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

function getUserPreferredTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return prefersDarkMode ? "dark" : "light";
}
