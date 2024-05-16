import en from "./english.ts";
import ru from "./russian.ts";

let allLocalizableTexts = {
    en, ru
};

let currentLocale = "en";

const getLocale = () => {
    return currentLocale;
}

const setLocale = (newLocale) => {
    currentLocale = newLocale
}

const getTexts = ():typeof en => {
    return allLocalizableTexts[currentLocale];
}

export default getTexts;

export {getLocale, setLocale}