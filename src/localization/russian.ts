import { registerLocale } from "./localization.ts";

const name = "ru"

const texts = {
  surveysList: {
    noSurveysText: 'Опросов пока ещё нет.',
    title: 'Мои Опросы'
  },
  surveyListItem: {
    editLinkText: 'Редактировать',
    runButtonText: "Запустить"
  },
  errorPage: {
    title: "Ой!",
    subTitle: "Извините, что-то пошло не так..."
  },
  editSurveyPage: {
    goBackLinkText: "Назад",
    surveyJsonLoadingText: "Опрос загружается...",
    surveyIsNotFound: "Опрос не найден..."
  }
};

registerLocale(name, texts)
export default texts