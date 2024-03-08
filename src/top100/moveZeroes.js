// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，
// 同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pre = 0;
  let cur = 1;
  let len = nums.length;
  let count = 0;
  debugger;
  while (cur < len - count) {
    if (nums[pre] == 0) {
      for (let i = pre; i < len - 1; i++) {
        nums[i] = nums[i + 1];
      }
      nums[len - count - 1] = 0;
      count++;
    } else {
      pre++;
      cur++;
    }
  }
  return nums;
};

let nums = [0,1,0,3,12];
let result = moveZeroes(nums);
console.log(result);
