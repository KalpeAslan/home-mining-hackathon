import {IDevice} from '../../../types/devices.types'

interface IState {
  hashrateForSecond?: number
  hashRateForDay?: number
  hashrateForYear?: number
  hashrateForHour?: number
  workersCount?: number
  isLoading: boolean
}

export const initialState: IState = {
  isLoading: false
}
