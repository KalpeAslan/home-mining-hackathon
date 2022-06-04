import { createAsyncThunk } from "@reduxjs/toolkit"
import { walletApi } from "../../../api/walletApi"
import { RootState } from "../../store"
import { converterApi } from "../../../api/converterApi"


export const setAccountInfoWallet = createAsyncThunk(
  "setAccountInfoWallet",
  async () => {
    try {
      return await walletApi.getAccountWallet()
    } catch (e) {
      console.log(e)
    }
  },
)

export const setTotalUsdBalance = createAsyncThunk(
  "setTotalUsdBalance",
  async (_, { getState }) => {
    const state = getState() as RootState
    if (!state.wallet.accountInfo) return 0
    try {

      const map = new Map()

      let balance: number
      const totalBalance = await Promise.all(state.wallet.accountInfo.balances.map(async ({ asset, free }) => {
        switch (asset) {
          case "BTC":
            balance = await converterApi.btcToUsd(+free)
            map.set("BTC", balance)
            return balance
          case "ETH":
            balance = await converterApi.ethToUsd(+free)
            map.set("ETH", balance)
            return balance
          case "LTC":
            balance = await converterApi.ltcToUsd(+free)
            map.set("LTC", balance)
            return balance
          default:
            return 0
        }
      })).then(res => res.reduce((partialSum, a) => partialSum + a, 0))
      return {
        totalBalance,
        coinBalancesToUsd: map,
      }
    } catch (e) {
      console.log("ERR")
      console.log(e)
    }
  },
)
