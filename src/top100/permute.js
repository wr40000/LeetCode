// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

var permute = function (nums) {
  let res = [];
  function backtrack(path) {
    console.log(`${path} -- start`)
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    for (let n of nums) {
      if (path.includes(n)) continue;
      debugger;
      backtrack(path.concat(n));
    }
    console.log(`${path} -- over`)
  }
  backtrack([]);
  return res;
};

let nums = [1, 2, 3];
let result = permute(nums);
console.log(result);
