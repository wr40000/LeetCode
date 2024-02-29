// 给定一个含有 n 个正整数的数组和一个正整数 s ，
// 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
// 并返回其长度。如果不存在符合条件的子数组，返回 0。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

let s = 7;
let nums = [2, 3, 1, 2, 4, 3];

miniLengthOfArray = (target, nums) => {
  let sum = 0;
  let miniLength = 9999;
  let miniStart = 0;
  let start = 0;
  let end = 0;
  let len = nums.length;
  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      length = end - start + 1;
      //   console.log("start,end,miniLength: ", start, end, miniLength);
      if (length < miniLength) {
        miniLength = length;
        miniStart = start;
      }
      sum -= nums[start];
      start++;
    }
    end++;
  }
  return miniLength == 9999 ? 0 : miniLength;
};

let result = miniLengthOfArray(s, nums);
console.log("最小长度为: ", result);
// console.log(`最小长度为${}的子数组: `, );
