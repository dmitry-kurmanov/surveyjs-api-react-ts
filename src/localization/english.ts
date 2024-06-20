import { registerLocale } from "./localization.ts";

const name = "en";

const texts = {
  settings: {
    lightMode: "light mode",
    darkMode: "dark mode",
  },
  surveysList: {
    noSurveysText: "There is no any survey yet.",
    title: "My Surveys",
  },
  surveyListItem: {
    editLinkText: "Edit",
    runButtonText: "Run",
  },
  errorPage: {
    title: "Oops!",
    subTitle: "Sorry, an unexpected error has occurred.",
    goToHome: "Go To Home Page",
  },
  editSurveyPage: {
    goBackLinkText: "Go Back",
    surveyIsNotFound: "Can't find the survey...",
  },
};

registerLocale(name, texts);
export default texts;
