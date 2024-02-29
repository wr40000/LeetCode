// 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，
// 且元素按顺时针顺序螺旋排列的正方形矩阵。

let n = 3;

spiralMatrix = (n) => {
  let newMatrix = new Array(n);
  for (let i = 0; i <= n - 1; i++) {
    newMatrix[i] = new Array(n).fill(0);
  }
  let loop = Math.floor(n / 2); // 循环次数
  let mid = Math.floor(n / 2); // 奇数则中间元素单独安排
  let count = 1; // 每个元素的值
  let offest = 1;
  let startX = 0;
  let startY = 0;
  while (loop--) {
    let row = startX;
    let column = startY;
    for (; column + offest < n; column++) {
      newMatrix[row][column] = count;
      count++;
    }
    for (; row + offest < n; row++) {
      newMatrix[row][column] = count;
      count++;
    }
    for (; column > offest - 1; column--) {
      newMatrix[row][column] = count;
      count++;
    }
    for (; row > offest - 1; row--) {
      newMatrix[row][column] = count;
      count++;
    }
    startX++;
    startY++;
    offest++;
  }
  if(n % 2 == 1){
    newMatrix[mid][mid] = count
  }
  return newMatrix;
};

let result = spiralMatrix(n);
result.map((item) => {
  console.log(item);
});
