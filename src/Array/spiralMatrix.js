// 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，
// 且元素按顺时针顺序螺旋排列的正方形矩阵。

let n = 5;

function spiralMatrix(n) {
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let startX = 0;
  let startY = 0;
  let loop = Math.floor(n / 2);
  let mid = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  while (loop--) {
    let row = startX;
    let column = startY;
    for (; column < n - offset; column++) {
      matrix[row][column] = count++;
    }
    for (; row < n - offset; row++) {
      matrix[row][column] = count++;
    }
    for (; column > startX; column--) {
      matrix[row][column] = count++;
      // console.log("column: ", column);
      // console.log(matrix[row][column]);
    }
    for (; row > startY; row--) {
      matrix[row][column] = count++;
    }
    // console.log("******");

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 1;
  }
  if (n % 2 === 1) {
    matrix[mid][mid] = count;
  }
  return matrix;
}

let result = spiralMatrix(n);
result.map((item) => {
  console.log(item);
});
