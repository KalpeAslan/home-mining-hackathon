import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.coinconvert.net/convert",
})

instance.interceptors.response.use(function(response) {
  return response.data
}, function(error) {
  return Promise.reject(error)
})


export const converterApi = {
  async btcToUsd(amount: number) {
    return await instance.get(`/btc/usd?amount=${amount}`).then((res: any) => res.USD)
  },
  async ethToUsd(amount: number) {
    return await instance.get(`/eth/usd?amount=${amount}`).then((res: any) => res.USD)
  },
  async ltcToUsd(amount: number) {
    return await instance.get(`/ltc/usd?amount=${amount}`).then((res: any) => res.USD)
  }
}
