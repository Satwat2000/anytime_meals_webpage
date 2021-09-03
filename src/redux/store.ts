import { configureStore } from '@reduxjs/toolkit'
import { profileFormReducer } from './profile_form/reducer'

export const store = configureStore({
  reducer: {
    profileFormReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
