// 560. 和为 K 的子数组
// 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的
// 子数组的个数 。

// 子数组是数组中元素的连续非空序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

// + 判断 Map中是否含有某个键；使用Map.has,注意区分Map.get 和 Map.has
  let pre_arr = [...nums];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    pre_arr[i] = (pre_arr[i - 1] || 0) + pre_arr[i];
  }
  let map = new Map();
  map.set(0, 1);
  let count = 0;
  debugger
  for (let i = 0; i < len; i++) {
    let val = pre_arr[i] - k;
    if(map.has(val)) count += map.get(val)
    map.set(pre_arr[i], (map.get(pre_arr[i]) || 0) + 1);
  }
  return count
};

let nums = [1,2,3]
let k = 3;
let result = subarraySum(nums, k);
console.log(result);
