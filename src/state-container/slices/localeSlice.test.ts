import { expect, test } from 'vitest'

import {createNewAction} from  "../../utils/for-tests.ts"
import { ILocaleState, setLocaleReducer} from './localeSlice.ts'

test('setLocaleReducer', () => {
    let state: ILocaleState = { value: "en" }
    let action = createNewAction<string>({ payload: "ru" })
    setLocaleReducer(state, action)
    expect(state.value).toBe("ru")
})