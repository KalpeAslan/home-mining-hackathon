import {createAsyncThunk} from '@reduxjs/toolkit'
import { bitcoinApi } from "../../../api/bitcoinApi"
import { miningApi } from "../../../api/miningApi"



export const getHashrateInSeconds = createAsyncThunk(
  'getHashrateInSeconds',
  async () => {
    try {
      return bitcoinApi.getHashrate()
    } catch (e) {
      console.log(e)
    }
  }
)

export const setWorkersCount = createAsyncThunk(
  'setWorkersCount',
  async () => {
    try {
      return miningApi.getWorkersCount()
    } catch (e) {
      console.log(e)
    }
  }
)
