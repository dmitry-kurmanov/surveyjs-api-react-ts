import { expect, test } from 'vitest'

import {createNewAction} from  "../../utils/for-tests.ts"
import { ISettingsState, setLocaleReducer, setThemeReducer} from './settingsSlice.ts'

const state: ISettingsState = { value: {
    locale: "en",
    theme: "light"
}};

test('setLocaleReducer', () => {
    let action = createNewAction<string>({ payload: "ru" })
    setLocaleReducer(state, action)
    expect(state.value.locale).toBe("ru")
})

test('setThemeReducer', () => {
    let action = createNewAction<string>({ payload: "dark" })
    setThemeReducer(state, action)
    expect(state.value.theme).toBe("dark")
})