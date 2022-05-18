import axios from "axios"
import { appConfig } from "../app.config"
import CryptoJS from "crypto-js";

const instance = axios.create({
  baseURL: 'https://api.binance.com',
  headers: {
    'X-MBX-APIKEY': appConfig.binanceApiKey,
  }
})


instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});


// instance.interceptors.request.use((req) => {
//
//   return req
// })

export const binanceApi = {

}
