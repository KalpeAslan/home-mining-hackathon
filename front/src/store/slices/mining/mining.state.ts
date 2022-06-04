import {IDevice} from '../../../types/devices.types'
import { IEarningList } from "../../../types/common.types"

export interface ICoinMeta {
  usdPrice?: number
  probability?: number | string
  eta?: number
  diff?: number | string
  bcperblock?: number | string
  hashestowin?: number | string
  avgtxvalue?: number | string
}

interface IState {
  hashrateForSecond?: number
  hashRateForDay?: number
  hashrateForYear?: number
  hashrateForHour?: number
  workersCount?: number
  isLoading: boolean
  earningList?: IEarningList
  bitcoinMeta?: ICoinMeta
}

export const initialState: IState = {
  isLoading: false

}
