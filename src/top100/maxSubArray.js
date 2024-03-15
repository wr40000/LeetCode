// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
// （子数组最少包含一个元素），返回其最大和。

// 子数组是数组中的一个连续部分

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let len = nums.length;
  if (len == 1) return nums[0];
  let max = undefined;
  let result = undefined;
  for (let i = 0; i < len; i++) {
    debugger;
    max = max == undefined ? nums[i] : Math.max(nums[i], max + nums[i]);
    result = result == undefined ? max : Math.max(max, result);
  }
  //   if (len == 1) return nums[0];
  //   debugger;
  //   pre_arr.unshift(0);
  //   for (let i = 0; i <= len; i++) {
  //     for (let j = i + 1; j <= len; j++) {
  //       let val = pre_arr[j] - pre_arr[i];
  //       max = max == undefined ? val : Math.max(val, max);
  //     }
  //   }
  return result;
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let result = maxSubArray(nums);
