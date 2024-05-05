import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counterSlice'
import surveysReducer from './slices/surveysSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    surveys: surveysReducer,
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch