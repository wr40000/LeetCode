// 给定一个含有 n 个正整数的数组和一个正整数 s ，
// 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
// 并返回其长度。如果不存在符合条件的子数组，返回 0。
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

target2 = 7;
nums2 = [2, 3, 1, 2, 4, 3];
// 个别测试案例无法通过
miniLengthOfArray = (target, nums) => {
  let end = 0;
  let length = Infinity;
  let start = 0;
  let minStart = 0;
  let sum = nums[start];
  let minSum = 0;
  debugger;
  while (end <= nums.length - 1) {
    for (let i = end; sum < target; i++) {
      sum += nums[1 + i];
      end = i + 1;
    }
    if (length > end - start + 1) {
      length = end - start + 1;
      minStart = start;
      minSum = sum;
    }
    while (sum >= target) {
      sum = sum - nums[start];
      start = start + 1;
      if (sum >= target) {
        length--;
        minStart = start;
        minSum = sum;
      }
    }
  }
  return minSum >= target ? length : 0;
};

// let result2 = miniLengthOfArray(target2, nums2);
// console.log("最小长度为: ", result2);

var minSubArrayLen = function (target, nums) {
  let start, end;
  start = end = 0;
  let sum = 0;
  let ans = Infinity;
  while (end <= nums.length - 1) {
    sum += nums[end];
    while (sum >= target) {
      ans = Math.min(end - start + 1, ans);
      sum -= nums[start];
      start++
    }
    end++
  }
  return ans === Infinity ? 0 : ans
};
let result = minSubArrayLen(target2, nums2);
console.log("最小长度为: ", result);