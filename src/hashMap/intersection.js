// 349. 两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。
// 输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

/*
    + 注意结果去重，Set容器没有length，使用Array.from将其转化为普通数组
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  let nums1Set = new Set(nums1);
  debugger;
  let len = nums1Set.length;
  let result = new Set();
  for (let i = 0; i <= nums2.length - 1; i++) {
    if (nums1Set.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }
  return Array.from(result);
};
let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
let result = intersection(nums1, nums2);
console.log(result);
