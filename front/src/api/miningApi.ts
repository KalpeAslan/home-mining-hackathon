import { instance } from "./instance"

export const miningApi = {
  async getWorkersCount(): Promise<any> {
    // return await instance.get('/mining/all-workers')
    return 5
  }
}
