export const utils = {
  gigaToExa(gigaNum: number) {
    return gigaNum / 1000000000
  },
  fromExa(num: number) {
    return `${Math.floor(num / 1000000000000000000)} EXA`
  },
  normalizeSum(num: number | string): string {
    const nums = String(num).split(".")
    if (nums.length === 1) return String(num)
    return `${nums[0]}.${nums[1].substr(0, 3)}`
  },
}
