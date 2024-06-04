
// 基于对象去重，对象属性值需要唯一
function unique(arr) {
  var obj = {};
  return arr.filter(function (item, index, arr) {
    return obj.hasOwnProperty(typeof item + item)
      ? false
      : (obj[typeof item + item] = true);
  });
}

function unique2(arr) {
  let obj = {};
  let k = 0;
  for (var i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (obj.hasOwnProperty(typeof item + item)) {
      arr.splice(i, 1);
      i--;
      continue;
    }
    // arr[k] = arr[i];
    obj[typeof item + item] = true;
    // k++;
  }
  return arr;
}

var arr = [
  1,
  1,
  "true",
  "true",
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  "NaN",
  0,
  0,
  "a",
  "a",
  {},
  {},
];

let arr1 = unique(arr)
let arr2 = unique2(arr)
console.log(arr1);
console.log(arr2);
console.log(arr1.length == arr2.length);
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}]
