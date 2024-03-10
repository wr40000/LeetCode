// 73. 矩阵置零
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都
// 设为 0 。请使用 原地 算法。

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let zeroIndexRow = new Set();
  let zeroIndexColumn = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        zeroIndexRow.add(i);
        zeroIndexColumn.add(j);
      }
    }
  }
  debugger
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (zeroIndexColumn.has(j) || zeroIndexRow.has(i)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};
let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
let result = setZeroes(matrix);
result.map((item) => {
    console.log(item);
  });
