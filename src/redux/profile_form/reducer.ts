import { createReducer } from '@reduxjs/toolkit'
import { ProfileFormState as initialState } from '../state'
import { saveUserData } from './actions'

export const profileFormReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUserData.pending, (state) => {
      state.isLoading = true
    })
    .addCase(saveUserData.fulfilled, (state, action) => {
      state.userData = action.payload.data
      state.isLoading = false
      state.lastFetch = Date.now().toString()
    })
    .addCase(saveUserData.rejected, (state, action) => {
      state = { ...state, error: action.error }
    })
})
