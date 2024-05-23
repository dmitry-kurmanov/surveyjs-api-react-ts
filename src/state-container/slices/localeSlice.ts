import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ILocaleState {
    value: string
}

const initialState: ILocaleState = {
    value: "en"
};

export function setLocaleReducer(state: ILocaleState, action: PayloadAction<string>) {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    let newLocale = action.payload as string;
    state.value = newLocale;
}

export const localeSlice = createSlice({
    name: "locale",
    initialState,
    reducers: {
        setLocale: setLocaleReducer
    }
});


// Action creators are generated for each case reducer function
export const { setLocale } = localeSlice.actions

export default localeSlice.reducer