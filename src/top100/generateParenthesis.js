// 22. 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且
//  有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];
    dfs(n, n, '', result)
    return result
};
function dfs(left, right, str, result) {
    if(left > right) return;
    if(left == 0 && right == 0) result.push(str);
    else{
        if(left > 0) dfs(left - 1, right, str + '(', result)
        if(right > 0) dfs(left, right - 1, str + ')', result)
    }
}

let n = 3;
let res = generateParenthesis(3)
console.log(res);