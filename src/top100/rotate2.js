// 48. 旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺
// 时针旋转 90 度。

// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。
// 请不要 使用另一个矩阵来旋转图像。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;
  if (len == 1) return matrix;
  for (let i = 0; i < len; i++) {
    for (let j = i; i <= j && j < len; j++) {
      if (i == j) {
        continue;
      } else {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  let loop = Math.floor(len / 2)
  debugger
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < loop; j++) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[i][len - 1 - j];
        matrix[i][len - 1 - j] = temp;
    }
  }
  return matrix;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result = rotate(matrix);
result.map((item) => {
  console.log(item);
});
