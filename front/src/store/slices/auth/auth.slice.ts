import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialState} from './auth.state'

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthState(state, action: PayloadAction<boolean>) {
      state.isSigned = true
    },
  },
  extraReducers: builder => {},
})

export const {setAuthState} = authSlice.actions

export default authSlice.reducer
