import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ISettingsState {
  value: {
    locale: string;
    theme: string | null;
  };
}

const initialState: ISettingsState = {
  value: {
    locale: "en",
    theme: null,
  },
};

export function setLocaleReducer(
  state: ISettingsState,
  action: PayloadAction<string>,
) {
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  let newLocale = action.payload as string;
  state.value.locale = newLocale;
}

export function setThemeReducer(
  state: ISettingsState,
  action: PayloadAction<string>,
) {
  let newTheme = action.payload as string;
  state.value.theme = newTheme;
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLocale: setLocaleReducer,
    setTheme: setThemeReducer,
  },
});

// Action creators are generated for each case reducer function
export const { setLocale, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
