import {createAsyncThunk} from '@reduxjs/toolkit'
import { bitcoinApi } from "../../../api/bitcoinApi"
import {  ICoinMeta } from "./mining.state"
import { utils } from "../../../utils/utils"
import { miningApi } from "../../../api/miningApi"



export const setBitcoinMeta = createAsyncThunk(
  'setBitcoinMeta',
  async () => {
    try {
      const bitcoinMeta: ICoinMeta = {
        diff: await bitcoinApi.getdifficulty(),
        // usdPrice: await bitcoinApi.ticker().then((res: any) => res.USD as number),
        hashestowin: await bitcoinApi.hashestowin().then(res => utils.fromExa(res)),
        probability: await bitcoinApi.probability(),
        bcperblock: await bitcoinApi.bcperblock(),
        eta: Math.floor(await bitcoinApi.eta()),
        avgtxvalue: await bitcoinApi.avgtxvalue()
      }
      return bitcoinMeta
    } catch (e) {

    }
  }
)


export const setEarningList = createAsyncThunk(
  'setEarningList',
  async () => {
    try {
      return miningApi.getEarningList()
    } catch (e) {
      console.log(e)
    }
  }
)
