import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./mining.state"
import { getHashrateInSeconds, setWorkersCount } from "./mining.thunk"
import { utils } from "../../../utils/utils"

const miningSlice = createSlice({
  name: "miningSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHashrateInSeconds.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getHashrateInSeconds.fulfilled, (state, action) => {
      state.hashrateForSecond = Math.floor(utils.gigaToExa(action.payload as unknown as number))
      state.hashrateForHour = Math.floor(utils.gigaToExa(action.payload as unknown as number) + (Math.floor(Math.random() * 10) * Math.round(Math.random()) * 2 - 1))
      state.hashRateForDay = Math.floor(state.hashrateForHour + (Math.floor(Math.random() * 10) * Math.round(Math.random()) * 2 - 1))
      state.isLoading = false
    })

    builder.addCase(setWorkersCount.pending, state => {
      state.isLoading = true
    })

    builder.addCase(setWorkersCount.fulfilled, (state, action) => {
      state.isLoading = false
      state.workersCount = action.payload
    })

  },
})

export const {} = miningSlice.actions

export default miningSlice.reducer
