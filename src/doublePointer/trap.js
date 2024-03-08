// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，
// 下雨之后能接多少雨水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  let result = 0;
  let l;
  let r;
  let left;
  let right;
  let lmax = null;
  let rmax = null;
  let arr = new Array(len).fill(0);
  for (let i = 1; i < len - 1; i++) {
    let val = height[i];
    l = i - 1;
    r = i + 1;
    left = height[l];
    right = height[r];
    if (lmax && lmax[0] <= l) {
      if (lmax[1] >= left) {
        left = lmax[1];
      } else {
        lmax[0] = i;
        lmax[1] = left;
      }
    } else {
      lmax = [];
      for (let i = l; i >= 0; i--) {
        if (height[i] > left) {
          left = height[i];
          lmax[0] = i;
          lmax[1] = left;
        }
      }
    }
    if (rmax && rmax[0] >= r) {
      if (rmax[1] >= right) {
        right = lmax[1];
      } else {
        rmax[0] = i;
        rmax[1] = right;
      }
      right = rmax[1];
    } else {
      rmax = [];
      for (let i = r; i < len; i++) {
        if (height[i] > right) {
          right = height[i];
          rmax[0] = i;
          rmax[1] = right;
        }
      }
    }
    val = Math.min(left, right) > val ? Math.min(left, right) - val : 0;
    arr[i] = val;
    result += val;
  }
  return result;
};
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let result = trap(height);
console.log(result);
