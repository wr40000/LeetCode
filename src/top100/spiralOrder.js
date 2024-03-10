// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，
// 返回矩阵中的所有元素。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let matrix_ = new Array(m * n).fill(0);
  if (m === 0) return [];
  if (m === 1) return matrix[0];
  if (n === 0) return [];
  if (n === 1) return matrix.map((item) => item[0]);
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let result = [];
  let loop = Math.min(m, n);
  while (--loop) {
    let row = startX;
    let column = startY;
    debugger
    for (; column < n - offset; column++) {
      if (matrix_[row * n + column] == "TAG") {
        // continue;
        break
      } else {
        result.push(matrix[row][column]);
        matrix_[row * n + column] = "TAG"
      }
    }
    for (; row < m - offset; row++) {
      if (matrix_[row * n + column] == "TAG") {
        // continue;
        break
      } else {
        result.push(matrix[row][column]);
        matrix_[row * n + column] = "TAG"
      }
    }
    for (; column > startY; column--) {
      if (matrix_[row * n + column] == "TAG") {
        // continue;
        break
      } else {
        result.push(matrix[row][column]);
        matrix_[row * n + column] = "TAG"
      }
    }
    for (; row > startX; row--) {
      if (matrix_[row * n + column] == "TAG") {
        // continue;
        break
      } else {
        result.push(matrix[row][column]);
        matrix_[row * n + column] = "TAG"
      }
    }
    debugger;
    startX++;
    startY++;
    offset++;
  }
  if (m == n && m % 2 == 1 && n % 2 == 1) {
    result.push(matrix[Math.floor(m / 2)][Math.floor(n / 2)]);
  }
  console.log(matrix_);
  return result;

  // 解法来自  http://t.csdnimg.cn/R3DQR
  // write code here
  //   let m = matrix.length;
  //   if (m === 0) return [];
  //   if (m === 1) return matrix[0];
  //   let n = matrix[0].length;
  //   if (n === 0) return [];
  //   if (n === 1) return matrix.map((item) => item[0]);

  //   let min = 0;
  //   let maxRow = n - 1;
  //   let maxCol = m - 1;
  //   let i, j;
  //   const ans = [];
  //   while (maxRow >= min && maxCol >= min) {
  //     (i = min), (j = min);
  //     while (j < maxRow) {
  //       ans.push(matrix[i][j++]);
  //     }
  //     while (i < maxCol) {
  //       ans.push(matrix[i++][j]);
  //     }
  //     ans.push(matrix[i][j]);
  //     while (j > min && maxCol > min) {
  //       ans.push(matrix[i][--j]);
  //     }
  //     while (i > min + 1 && maxRow > min) {
  //       ans.push(matrix[--i][j]);
  //     }
  //     min++;
  //     maxRow--;
  //     maxCol--;
  //   }
  //   return ans;
};
let matrix = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
];
let result = spiralOrder(matrix);
console.log(result);
