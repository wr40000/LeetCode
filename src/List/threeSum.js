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
  let map = new Map();
  let len = nums.length;
  let value;
  let hasValue;
  let count;
  let result = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i >= j) {
        // debugger
        continue;
      } else {
        value = nums[i] + nums[j];
        hasValue = map.has(value);
        if (hasValue) {
          count = map.get(value);
          count.add([i, j]);
          map.set(value, count);
        } else {
          map.set(value, new Set([[i, j]]));
        }
      }
    }
  }
  for (let i = 0; i < len; i++) {
    value = nums[i];
    count = map.has(-value);
    if (count) {
      let set = map.get(-value);
      set = Array.from(set);
      set.forEach((arr, i, set) => {
        if (arr[0] !== arr[1] && arr[1] !== i && arr[0] !== i) {
          if (i < arr[0]) {
            arr[2] = arr[1];
            arr[1] = arr[0];
            arr[0] = i;
          } else if (i < arr[1]) {
            arr[2] = arr[1];
            arr[1] = i;
          } else {
            arr[2] = i;
          }
        } else {
          set.splice(i);
        }
      });
      map.set(-value, new Set(set));
      result.push(...set);
    } else {
      map.delete(value);
    }
  }
  debugger
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result);
