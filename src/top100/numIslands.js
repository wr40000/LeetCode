// 200. 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let lenRow = grid.length;
    let lenColunm = grid[0].length;
    let res = 0
    for (let i = 0; i < lenRow; i++) {
        for (let j = 0; j < lenColunm; j++) {
            if (grid[i][j] == '1') {
                res++;
                search(i, j)
            }
        }
    }
    function search(i, j) {
        if (i < 0 || j < 0 || i >= lenRow || j >= lenColunm || grid[i][j] == '0' || grid[i][j] == '#') return
        grid[i][j] = '#'
        logArr(grid)
        search(i + 1, j)
        search(i - 1, j)
        search(i, j + 1)
        search(i, j - 1)
        return
    }
    return res
};

let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

function logArr(arr){
    console.log("******************");
    arr.map((item)=>{
        console.log(item);
    })
    console.log("******************");
}
let result = numIslands(grid);