// 994. 腐烂的橘子
// 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：

// 值 0 代表空单元格；
// 值 1 代表新鲜橘子；
// 值 2 代表腐烂的橘子。
// 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。

// 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] 仅为 0、1 或 2

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let lenRow = grid.length;
  let lenColunm = grid[0].length;
  let row_ = [-1, 0, 1, 0];
  let colunm_ = [0, -1, 0, 1];
  let res = 0;
  let queue = [];
  let maxMin = 0;
  let map = new Map();
  for (let i = 0; i < lenRow; i++) {
    for (let j = 0; j < lenColunm; j++) {
      if (grid[i][j] == 2) {
        let code = i * lenColunm + j;
        queue.push(code);
        map.set(code, res);
      }
    }
  }
  while (queue.length !== 0) {
    let code = queue.shift();
    let CodeI = Math.floor(code / lenColunm);
    let CodeJ = code % lenColunm;
    for (let i = 0; i < 4; i++) {
      let newCodeI = CodeI + row_[i];
      let newCodeJ = CodeJ + colunm_[i];
      debugger;
      if (
        newCodeI >= 0 &&
        newCodeI < lenRow &&
        newCodeJ >= 0 &&
        newCodeJ < lenColunm &&
        grid[newCodeI][newCodeJ] == 1
      ) {
        grid[newCodeI][newCodeJ] = 2;
        queue.push(newCodeI * lenColunm + newCodeJ);
        map.set(newCodeI * lenColunm + newCodeJ, 1 + map.get(code));
        maxMin = Math.max(maxMin, 1 + map.get(code));
      }
    }
  }
  //   console.log(grid.map((i) => console.log(i)));
  for (let i = 0; i < lenRow; i++) {
    for (let j = 0; j < lenColunm; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxMin;
};

let grid = [[1, 2]];
let result = orangesRotting(grid);
console.log(result);
