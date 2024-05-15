import { expect, test } from 'vitest'

import { ISurvey, ISurveyState, setSurveysReducer, updateSurveyJsonReducer } from './surveysSlice.ts'

const newSurveys: ISurvey[] = [
    { Id: '0', Name: 'name0', Json: 'json0', IsPublished: false },
    { Id: '1', Name: 'name1', Json: 'json1', IsPublished: false }
]

const createNewAction = <T>({ payload, type = 'action-test-type' }: { payload: T, type?: string }) => {
    return { payload, type }
}

test('setSurveysReducer', () => {
    let state: ISurveyState = { value: [] }
    let action = createNewAction<ISurvey[]>({ payload: newSurveys })
    setSurveysReducer(state, action)
    expect(state.value).toStrictEqual(newSurveys)

    action = createNewAction<ISurvey[]>({ payload: [] })
    setSurveysReducer(state, action)
    expect(state.value).toStrictEqual([])
})

test('updateSurveyJson', () => {
    let newJson = 'new json'
    let state: ISurveyState = { value: newSurveys }
    let payload = { Id: '1', Json: newJson }
    let action = createNewAction<Pick<ISurvey, "Id" | "Json">>({ payload })

    updateSurveyJsonReducer(state, action)
    expect(state.value[1].Json).toBe(newJson)
})