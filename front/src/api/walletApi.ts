import { IAccountInfo } from "../store/slices/wallet/wallet.state"

export const walletApi = {
  async getAccountWallet(): Promise<IAccountInfo> {
    return {
      "makerCommission": 15,
      "takerCommission": 15,
      "buyerCommission": 0,
      "sellerCommission": 0,
      "canTrade": true,
      "canWithdraw": true,
      "canDeposit": true,
      "updateTime": 123456789,
      "accountType": "SPOT",
      "balances": [
        {
          "asset": "BTC",
          "free": "1",
          "locked": "0.00000000",
        },
        {
          "asset": "LTC",
          "free": "1",
          "locked": "0.00000000",
        },
      ],
      "permissions": [
        "SPOT",
      ],
    }
  }
}
