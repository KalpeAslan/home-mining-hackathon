import { Path } from "react-native-redash"

export type GraphData = {
  max: number;
  min: number;
  curve: Path;
  mostRecent: number;
};

export interface IAccountProfit {
  "time": number,            // Mining date
  "type": number, // 0:Mining Wallet,5:Mining Address,7:Pool Savings,8:Transferred,31:Income Transfer ,32:Hashrate Resale-Mining Wallet 33:Hashrate Resale-Pool Savings
  "hashTransfer": null | string,            // Transferred Hashrate
  "transferAmount": null | string | number,          // Transferred Income
  "dayHashRate": number,  // Daily Hashrate
  "profitAmount": number,   //Earnings Amount
  "coinName": string | "BTC",              // Coin Type
  "status": number    //Status：0:Unpaid， 1:Paying  2：Paid
}


export interface IEarningList {
  "code": number,
  "msg": string,
  "data": {
    "accountProfits": IAccountProfit[],
    "totalNum": number,          // Total Rows
    "pageSize": number          // Rows per page
  }
}
