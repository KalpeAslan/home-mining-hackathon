import axios from "axios"


const instance = axios.create({
  baseURL: 'https://blockchain.info/'
})

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export const bitcoinApi = {
  async getHashrate() {
    return instance.get('q/hashrate')
  },
  getdifficulty(): Promise<number> {
    return instance.get('q/getdifficulty')
  },
  bcperblock(): Promise<number> {
    return instance.get('q/bcperblock')
  },
  probability(): Promise<number> {
    return instance.get('q/probability')
  },
  hashestowin(): Promise<number> {
    return instance.get('q/hashestowin')
  },
  avgtxvalue(): Promise<number> {
    return instance.get('q/avgtxvalue')
  },
  eta(): Promise<number> {
    return instance.get('q/eta')
  },
  ticker(): Promise<any> {
    return instance.get('/ticker')
  }
}
