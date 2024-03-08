// 438. 找到字符串中所有字母异位词
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子
// 串的起始索引。不考虑答案输出的顺序。
// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
*/
var findAnagrams = function (s, p) {
  // + 数组方法调用总是写成[]??? 打胶打多了？
  // + a-- 和--a 使用时注意区分
  let lenS = s.length;
  let lenP = p.length;
  let arr = new Array(26).fill(0);
  let a_UTF = "a".charCodeAt();
  let result = [];
  for (let code of p) {
    arr[code.charCodeAt() - a_UTF]++;
  }
  debugger
  if (lenS < lenP) return [];
  for (let i = 0; i < lenS - lenP + 1; i++) {
    let count = 0;
    let arr_c = [...arr];
    while (count < lenP) {
      let is = --arr_c[s[i + count].charCodeAt() - a_UTF];
      if (is >= 0) {
        count++;
      } else {
        break;
      }
    }
    if (count == lenP) {
      result.push(i);
    }
  }
  return result;
};
let s = "cbaebabacd";
let p = "abc";
let result = findAnagrams(s, p);
console.log(result);
