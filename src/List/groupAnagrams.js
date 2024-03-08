// 49. 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结
// 果列表。
// 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let result = [];
  let len = strs.length;
  let a_UTF = "a".charCodeAt();
  for (let i = 0; i < len; i++) {
    let keys = new Array(26).fill(0);
    for (let key of strs[i]) {
      let codeUTF = key.charCodeAt() - a_UTF;
      keys[codeUTF]++;
    }
    let keysStr = keys.join(","); // 将数组转换成字符串作为键
    if (!map.has(keysStr)) {
      map.set(keysStr, [strs[i]]);
    } else {
      map.get(keysStr).push(strs[i]);
    }
  }
  debugger;
  for (let arrs of map.values()) {
    result.push(arrs);
  }
  return result;
};

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
let result = groupAnagrams(str);
console.log(result);
