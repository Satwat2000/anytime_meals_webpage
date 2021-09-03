import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const _getProfileFormState = (state: RootState) => state.profileFormReducer

export const getUserData = createSelector(_getProfileFormState, (state) => state.userData)
