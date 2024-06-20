import { registerLocale } from "./localization.ts";

const name = "ru";

const texts = {
  settings: {
    lightMode: "светлая тема",
    darkMode: "тёмная тема",
  },
  surveysList: {
    noSurveysText: "Опросов пока ещё нет.",
    title: "Мои Опросы",
  },
  surveyListItem: {
    editLinkText: "Настроить",
    runButtonText: "Запустить",
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
};

registerLocale(name, texts);
export default texts;
