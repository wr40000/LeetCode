// 238. 除自身以外数组的乘积
// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于
//  nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在
//   32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length;
  let val;
  let result = [];
  let f_ = [];
  let b_ = [];
  for (let i = 0; i < len; i++) {
    f_[i] = nums[i] * (f_[i - 1] == undefined ? 1 : f_[i - 1]);
    b_[len - 1 - i] =
      nums[len - 1 - i] * (b_[len - i] == undefined ? 1 : b_[len - i]);
  }
  debugger;
  for (let i = 0; i < len; i++) {
    val =
      (f_[i - 1] == undefined ? 1 : f_[i - 1]) *
      (b_[i + 1] == undefined ? 1 : b_[i + 1]);
    result.push(val);
  }
  return result;
};
let nums = [-1, 1, 0, -3, 3];
let result = productExceptSelf(nums);
console.log(result);
