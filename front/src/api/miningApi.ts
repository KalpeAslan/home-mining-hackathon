import { instance } from "./instance"

export const miningApi = {
  async getWorkersCount(): Promise<any> {
    // return await instance.get('/mining/all-workers')
    return 5
  },
  async getEarningList() {
    return {
      "code": 0,
      "msg": "",
      "data": {
        "accountProfits": [
          {
            "time": 1586188800000,            // Mining date
            "type": 31, // 0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate Resale-Mining Wallet 33:Hashrate Resale-Pool Savings
            "hashTransfer": null,            // Transferred Hashrate
            "transferAmount": null,          // Transferred Income
            "dayHashRate": 129129903378244,  // Daily Hashrate
            "profitAmount": 8.6083060304,   //Earnings Amount
            "coinName":"BTC",              // Coin Type
            "status": 2    //Status：0:Unpaid， 1:Paying  2：Paid
          },
          {
            "time": 1607529600000,
            "coinName": "BTC",
            "type": 0,
            "dayHashRate": 9942053925926,
            "profitAmount": 0.85426469,
            "hashTransfer": 200000000000,
            "transferAmount": 0.02180958,
            "status": 2
          },
          {
            "time": 1607443200000,
            "coinName": "BTC",
            "type": 31,
            "dayHashRate": 200000000000,
            "profitAmount": 0.02905916,
            "hashTransfer": null,
            "transferAmount": null,
            "status": 2
          }
        ],
        "totalNum": 3,          // Total Rows
        "pageSize": 20          // Rows per page
      }
    }
    // return await instance.get('/binance/earning-list')
  }
}
