// 189. 轮转数组
// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  //   let len = nums.length;
  //   if (len == 1) return nums;
  //   k = k % len;
  //   let arr = new Array(len).fill(0);
  //   arr = [...arr, ...nums];
  //   let index;
  //   for (let i = 0; i < k; i++) {
  //     arr[len - 1 - i] = arr[2 * len - 1 - i];
  //     index = len - 1 - i;
  //   }
  //   return arr.slice(index, index + len);

  //   方法二
  let len = nums.length;
  if (len == 1) return nums;
  k = k % len;
  for (let i = 0; i < k; i++) {
    let temp = nums[len - 1];
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp
  }
  return nums;
};
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotate(nums, k);
console.log(result);
