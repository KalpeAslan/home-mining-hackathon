import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./wallet.state"
import { setAccountInfoWallet, setTotalUsdBalance } from "./wallet.thunk"

const walletSlice = createSlice({
  name: "devicesSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setAccountInfoWallet.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(setAccountInfoWallet.fulfilled, (state, action) => {
      state.accountInfo = action.payload
    })

    builder.addCase(setAccountInfoWallet.rejected, (state) => {
      state.isLoading = false
    })


    builder.addCase(setTotalUsdBalance.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(setTotalUsdBalance.fulfilled, (state, action: any) => {
      state.totalUsdBalance = action.payload.totalBalance
      state.coinBalancesToUsd = action.payload.coinBalancesToUsd
    })

    builder.addCase(setTotalUsdBalance.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export const {} = walletSlice.actions

export default walletSlice.reducer
