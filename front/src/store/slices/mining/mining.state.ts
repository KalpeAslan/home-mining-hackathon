import {IDevice} from '../../../types/devices.types'

interface IState {
  hashrateForSecond?: number
  hashRateForDay?: number
  hashrateForYear?: number
  hashrateForHour?: number
  workersCount?: number
  isLoading: boolean

  bitcoinMeta?: ICoinMeta
}


export interface ICoinMeta {
  usdPrice?: number
  probability?: number | string
  eta?: number
  diff?: number | string
  bcperblock?: number | string
  hashestowin?: number | string
  avgtxvalue?: number | string
}

export const initialState: IState = {
  isLoading: false
}
