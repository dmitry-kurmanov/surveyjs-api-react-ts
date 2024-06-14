import en from "./english.ts";

const allTexts: { [name: string]: typeof en } = {};

export function registerLocale(name: string, texts: typeof en) {
  allTexts[name] = texts;
}

const getTexts = (localeName: string) => {
  return allTexts[localeName];
};

export default getTexts;
