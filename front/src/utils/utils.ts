export const utils = {
  gigaToExa(gigaNum: number) {
    return gigaNum / 1000000000
  },
  fromExa(num: number) {
    return `${Math.floor(num / 1000000000000000000)} EXA`
  }
}
