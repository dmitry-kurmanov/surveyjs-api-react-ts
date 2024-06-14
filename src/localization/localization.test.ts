import { expect, test } from "vitest";

import "./english.ts";
import "./russian.ts";
import getTexts from "./localization.ts";

test("getLocale, setLocale", () => {
  expect(getTexts("en").errorPage.title).toBe("Oops!");
  expect(getTexts("ru").errorPage.title).toBe("Ой!");
});
