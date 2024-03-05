// 383. 赎金信
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由
//  magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  debugger;
  let arr = [];
  for (let code of magazine) {
    arr.push(code.charCodeAt());
  }
  let result;
  for (let code of ransomNote) {
    let utf = code.charCodeAt();
    result = arr.indexOf(utf);
    if (result !== -1) {
      arr[result] = null;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

let ransomNote = "a";
let magazine = "b";
canConstruct(ransomNote, magazine);
