// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列
// （不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * + 排序
 * + 去重
 */
// 笨方法
// var longestConsecutive = function (nums) {
//   nums = nums.sort((a, b) => {
//     return a - b;
//   });
//   let result = 0;
//   let count = 1;
//   let len = nums.length;
//   let value = nums[0];
//   if (len == 0) {
//     return 0;
//   }
//   if (len == 1) {
//     return 1;
//   }
//   debugger;
//   for (let i = 0; i < len; i++) {
//     if (value == nums[i + 1]) {
//       value = nums[i + 1];
//     } else if (value == nums[i + 1] - 1) {
//       count++;
//       value = nums[i + 1];
//     } else {
//       count = 1;
//       value = nums[i + 1];
//     }
//     if (result < count) {
//       result = count;
//     }
//   }
//   return result;
// };

// hashmap
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longCnt = 0;
  let curCnt = 0;
  let curNum;
  debugger
  for (let num of numSet) {
    // 存疑，内外循环时间复杂度能为o(n)?
    if (!numSet.has(num - 1)) {
      curNum = num;
      curCnt = 1;
      while (numSet.has(curNum + 1)) {
        curCnt++;
        curNum++;
      }
      longCnt = Math.max(longCnt, curCnt);
    }
  }

  return longCnt;
};
let nums = [1, 2, 0, 1];
let result = longestConsecutive(nums);
console.log(result);
