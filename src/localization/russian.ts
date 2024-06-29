import { registerLocale } from "./localization.ts";

const name = "ru";

const texts = {
  settings: {
    lightMode: "светлая тема",
    darkMode: "тёмная тема",
    homeButton: "на главную"
  },
  surveysList: {
    noSurveysText: "Опросов пока ещё нет.",
    title: "Мои Опросы",
    createSurveyLabel: "Создать опрос",
  },
  surveyListItem: {
    editLinkText: "Настроить",
    runButtonText: "Запустить",
  },
  surveyCreator: {
    surveyNameLabel: "название опроса",
    editSurveyNameLabel: "Изменить название опроса",
    saveSurveyNameLabel: "Сохранить название опроса"
  },
  errorPage: {
    title: "Ой!",
    subTitle: "Извините, что-то пошло не так...",
    goToHome: "Вернуться на главную",
  },
  editSurveyPage: {
    goBackLinkText: "Назад",
    surveyIsNotFound: "Опрос не найден...",
  },
  footer: {
    haveProblemsText: "Есть вопрсосы?",
    createIssue: "создайте issue."
  }
};

registerLocale(name, texts);
export default texts;
