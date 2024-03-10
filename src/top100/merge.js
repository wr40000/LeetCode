// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为
//  intervals[i] = [starti, endi] 。请你合并所有重叠的区间，
//  并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let len = intervals.length;
  if (len == 1) return intervals;
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  function mergeSingle(arr1, arr2) {
    if (arr2[0] <= arr1[1]) {
      return [arr1[0], Math.max(arr1[1], arr2[1])];
    } else {
      return false;
    }
  }
  let l = 0;
  let r = 0;
  let result = [];
  debugger;
  while (r < len) {
    r = l + 1;
    let val = mergeSingle(intervals[l], intervals[r]);
    if (!val) {
      result.push(intervals[l]);
      if (r == len - 1) {
        result.push(intervals[r]);
      }
      l++;
      r++
    } else {
      intervals[r] = val;
      if (r == len - 1) {
        result.push(intervals[r]);
      }
      l = r;
      r = l + 1;
    }
  }
  return result;
};
let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let result = merge(intervals);
console.log(result);
