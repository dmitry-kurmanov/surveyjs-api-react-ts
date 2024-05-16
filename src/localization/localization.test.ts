import { expect, test } from 'vitest'
import getTexts, {getLocale, setLocale} from "./localization";

test('getLocale, setLocale', () => {
    expect(getLocale(), "default locale").toBe("en")
    expect(getTexts().errorPage.title).toBe("Oops!")
    setLocale("ru")
    expect(getLocale()).toBe("ru")
    expect(getTexts().errorPage.title).toBe("Ой!")
})