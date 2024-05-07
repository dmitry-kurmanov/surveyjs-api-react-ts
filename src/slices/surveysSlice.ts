import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {ISurvey} from '../components/surveyList/SurveysList.tsx'

export interface ISurveyState {
  value: ISurvey[]
}

const initialState:ISurveyState = {
    value: []
};

export const surveySlice = createSlice({
    name: "surveys",
    initialState,
    reducers: {
        setSurveys: (state:ISurveyState, action:PayloadAction<ISurvey[]>)=> {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            let payload = action.payload as ISurvey[];
            state.value = [...payload];
        },
        addSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
            let payload = action.payload as ISurvey;
            state.value.push(payload)
        },
        removeSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
            let payload = action.payload as ISurvey;
            state.value = state.value.filter((item)=>item !== payload);
        },
        updateSurvey: (state:ISurveyState, action:PayloadAction<ISurvey>)=> {
            let payload = action.payload as ISurvey;
            state.value = state.value.map((item)=>{
                if (item.Id === payload.Id) {
                    return payload;
                }
                return item;
            });
        },
    }
});


// Action creators are generated for each case reducer function
export const { setSurveys, addSurvey, removeSurvey, updateSurvey } = surveySlice.actions

export default surveySlice.reducer