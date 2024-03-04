var isAnagram = function (s, t) {
  let arr = new Array(26).fill(0);
  let a_UTF = "a".charCodeAt();
  for (let code of s) {
    arr[code.charCodeAt() - a_UTF]++;
  }
  for (let code of t) {
    arr[code.charCodeAt() - a_UTF]--;
  }
  return arr.every((i) => {
    return i === 0;
  });
};

let s = "dgqztusjuu";
let t = "dqugjzutsu";
let result = isAnagram(s, t);
console.log(result);
