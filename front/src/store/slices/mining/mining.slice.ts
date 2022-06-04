import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./mining.state"
import { setBitcoinMeta, setEarningList } from "./mining.thunk"
import { utils } from "../../../utils/utils"

const miningSlice = createSlice({
  name: "miningSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {

    builder.addCase(setBitcoinMeta.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(setBitcoinMeta.fulfilled, (state, action) => {
      state.isLoading = false
      state.bitcoinMeta = action.payload
    })

    builder.addCase(setBitcoinMeta.rejected, (state) => {
      state.isLoading = false
    })


    builder.addCase(setEarningList.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(setEarningList.fulfilled, (state, action: any) => {
      state.earningList = action.payload
    })

    builder.addCase(setEarningList.rejected, (state) => {
      state.isLoading = false
    })


  },
})

export const {} = miningSlice.actions

export default miningSlice.reducer
