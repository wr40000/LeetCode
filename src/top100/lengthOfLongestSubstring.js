// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长
// 子串的长度。

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  // + 字符串 方法s.charAt()
  // + 数组方法 Array.prototype.splice() Array.prototype.indexOf()
  let arr = [];
  let max = 0;
  let len = s.length;
  for (let i = 0; i < len; i++) {
    let index = arr.indexOf(s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s.charAt[i]);
    max = Math.max(arr.length, max);
  }
  return max;
};
let s = "as";
let result = lengthOfLongestSubstring(s);
console.log(result);
