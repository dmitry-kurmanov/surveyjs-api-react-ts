import en from "./english.ts";
import ru from "./russian.ts";

let allLocalizableTexts: { [id: string] : typeof en } = {
    "en": en, 
    "ru": ru
};

let currentLocale = "en";

const getLocale = () => {
    return currentLocale;
}

const setLocale = (newLocale: string) => {
    currentLocale = newLocale
}

const getTexts = () => {
    return allLocalizableTexts[currentLocale];
}

export default getTexts;

export {getLocale, setLocale}