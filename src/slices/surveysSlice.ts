import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISurvey {
    Id: string
    Name: string
    Json: string
    IsPublished: boolean
  }

export interface ISurveyState {
    value: ISurvey[]
}

const initialState: ISurveyState = {
    value: []
};

export function setSurveysReducer(state: ISurveyState, action: PayloadAction<ISurvey[]>) {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    let newSurveys = action.payload as ISurvey[];
    state.value = [...newSurveys];
}

export function updateSurveyJsonReducer(state: ISurveyState, action: PayloadAction<Pick<ISurvey, "Id" | "Json">>) {
    let surveyToUpdate = state.value.find(s=>s.Id === action.payload.Id);
    if (typeof surveyToUpdate === "undefined") return;
    surveyToUpdate.Json = action.payload.Json;
}

export const surveySlice = createSlice({
    name: "surveys",
    initialState,
    reducers: {
        setSurveys: setSurveysReducer,
        updateSurveyJson: updateSurveyJsonReducer
        // addSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
        //     let payload = action.payload as ISurvey;
        //     state.value.push(payload)
        // },
        // removeSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
        //     let payload = action.payload as ISurvey;
        //     state.value = state.value.filter((item)=>item !== payload);
        // },
        // updateSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
        //     let payload = action.payload as ISurvey;
        //     state.value = state.value.map((item)=>{
        //         if (item.Id === payload.Id) {
        //             return payload;
        //         }
        //         return item;
        //     });
        // },
    }
});


// Action creators are generated for each case reducer function
export const { setSurveys, updateSurveyJson } = surveySlice.actions

export default surveySlice.reducer