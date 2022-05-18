import axios from "axios"


const instance = axios.create({
  baseURL: 'https://blockchain.info/q'
})

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const bitcoinApi = {
  async getHashrate() {
    return instance.get('/hashrate')
  }
}
