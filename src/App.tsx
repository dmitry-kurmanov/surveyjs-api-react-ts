import { useDispatch, useSelector } from "react-redux";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";

import { RootState } from "./state-container/store.ts";
import RootPage from "./routes/RootPage.tsx";
import Error404Page from "./routes/Error404Page.tsx";
import EditSurveyPage from "./routes/EditSurveyPage.tsx";
import "./localization/english.ts";
import "./localization/russian.ts";
import "./App.scss";
import { setTheme } from "./state-container/slices/settings.ts";

const router = createHashRouter([
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  if (currentTheme === null) {
    const userTheme = prefersDarkMode ? "dark" : "light";
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
