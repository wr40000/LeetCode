// 240. 搜索二维矩阵 II
// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。
// 该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let l = m - 1;
  let r = 0;
  let result = false;
  debugger;
  let tag;
  while (l >= 0 && r <= n - 1) {
    if (matrix[l][r] == target) {
      result = true;
      break;
    } else if (matrix[l][r] > target) {
      tag = matrix[l][r];
      l--;
    } else if (matrix[l][r] < target) {
      tag = matrix[l][r];
      r++;
    }
  }
  return result;
};
let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
let target = 20;
let result = searchMatrix(matrix, target);
console.log(result);
