// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按
//  任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == "") return [];
  let numberArr = digits.split("");
  numberArr.forEach((i, index) => {
    numberArr[index] = parseInt(i);
  });
  let map = new Map();
  let code = "a".charCodeAt();
  for (let i = 2; i <= 9; i++) {
    let arr = [];
    arr.push(String.fromCharCode(code++));
    arr.push(String.fromCharCode(code++));
    arr.push(String.fromCharCode(code++));
    if (i == 7 || i == 9) {
      arr.push(String.fromCharCode(code++));
    }
    map.set(i, arr);
  }
  let charArr = [];
  for (let i = 0; i < numberArr.length; i++) {
    charArr[i] = [...map.get(numberArr[i])];
  }
  let init = map.get(numberArr[0]);
  let res = [...init];
  for (let i = 1; i < charArr.length; i++) {
    let arr = [];
    for (let j = 0; j < charArr[i].length; j++) {
      res.forEach((i_) => {
        let newCode = i_ + charArr[i][j];
        arr.push(newCode);
      });
    }
    res = [...res, ...arr];
  }
  let end = []
  res.forEach(i=>{
    if(i.length == numberArr.length){
      end.push(i)
    }
  })
  console.log(end);
  return end;
};

let digits = "234";
letterCombinations(digits);
