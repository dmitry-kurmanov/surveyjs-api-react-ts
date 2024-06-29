import { registerLocale } from "./localization.ts";

const name = "en";

const texts = {
  settings: {
    lightMode: "light mode",
    darkMode: "dark mode",
    homeButton: "go home"
  },
  surveysList: {
    noSurveysText: "There is no any survey yet.",
    title: "My Surveys",
    createSurveyLabel: "Create Survey"
  },
  surveyListItem: {
    editLinkText: "Edit",
    runButtonText: "Run",
  },
  surveyCreator: {
    surveyNameLabel: "survey name",
    editSurveyNameLabel: "Edit Survey Name",
    saveSurveyNameLabel: "Save Survey Name"
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
  footer: {
    haveProblemsText: "Have a problems? Feel free to",
    createIssue: "create an issue."
  }
};

registerLocale(name, texts);
export default texts;
