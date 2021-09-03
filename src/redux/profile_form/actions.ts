import { createAsyncThunk } from '@reduxjs/toolkit'
import * as actions_types from './action_types'
import axios from 'axios'

// USER ACTIONS
export interface UserProfile {
  displayName: string
  fullName: string
  email: string
  phone: number
}

export const saveUserData = createAsyncThunk(actions_types.SAVE_USER, async (payload: UserProfile) => {
  const response = await axios.request({
    method: 'POST',
    baseURL: 'url',
    url: '/user',
    data: payload,
  })
  return response
})

// USER_ADDRESS_ACTIONS
export interface UserAddress {
  name: string
  homeName: string
  areaName: string
  streetName: string
  landmark: string
  state: string
  country: string
  city: string
  pin: number
}

export const saveUserAddressData = createAsyncThunk(actions_types.SAVE_USER_ADDRESS, async (payload: UserAddress) => {
  const response = await axios.request({
    method: 'POST',
    baseURL: 'url',
    url: '/user-address',
    data: payload,
  })
  return response
})
