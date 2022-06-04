import { IDevice } from "../../../types/devices.types"


export interface IBalance {
  "asset": string,
  "free": string,
  "locked": string
}

export interface IAccountInfo {
  "makerCommission": number,
  "takerCommission": number,
  "buyerCommission": number,
  "sellerCommission": number,
  "canTrade": boolean,
  "canWithdraw": boolean,
  "canDeposit": boolean,
  "updateTime": number,
  "accountType": string | "STOP",
  "balances": IBalance[],
  "permissions": string[]
}


interface IState {
  accountInfo?: IAccountInfo
  isLoading: boolean
  totalUsdBalance?: number | string
  coinBalancesToUsd?: Map<string, number>
}

export const initialState: IState = {
  isLoading: false,
}
