import { registerLocale } from "./localization.ts";

const name = "en"

const texts = {
  surveysList: {
    noSurveysText: 'There is no any survey yet.',
    title: 'My Surveys'
  },
  surveyListItem: {
    editLinkText: 'Edit',
    runButtonText: "Run"
  },
  errorPage: {
    title: "Oops!",
    subTitle: "Sorry, an unexpected error has occurred."
  },
  editSurveyPage: {
    goBackLinkText: "Go Back",
    surveyJsonLoadingText: "Survey is loading...",
    surveyIsNotFound: "Can't find the survey..."
  }
}

registerLocale(name, texts)
export default texts