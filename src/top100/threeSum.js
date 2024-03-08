// 15. 三数之和
// 提示
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j],
// nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足
//  nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。


/**
 * @param {number[]} nums
 * @return {number[][]}
*/
var threeSum = function (nums) {
  // + 使用 var在for循环中更改 i
  // + if (iNum == nums[i - 1]) continue 目的是如果当前轮次iNum和上一个元
  // 素相等则直接跳过该轮
  nums.sort((a, b) => {
    return a - b;
  });
  let result = [];
  if (nums[0] > 0) return result;
  let len = nums.length;
  let l;
  let left;
  let r;
  let right;
  let iNum;
  let sum;
  for (let i = 0; i < len; i++) {
    l = i + 1;
    r = len - 1;
    iNum = nums[i];
    if (iNum > 0) return result;
    // 去重
    if (iNum == nums[i - 1]) continue
    while (l < r) {
      left = nums[l];
      right = nums[r];
      // 数组排过序，如果第一个数大于0直接返回res
      sum = iNum + left + right;
      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        result.push([iNum, left, right]);
        // 去重
        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }
        // 去重
        while (l < r && nums[r] == nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
let result = threeSum(nums);
console.log(result);
