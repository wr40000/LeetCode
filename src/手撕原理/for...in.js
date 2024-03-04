// 问题一：遍历顺序以数字有先
// 问题二：无法遍历Symbol属性
// 问题三：可以遍历到公有中可枚举的

Object.prototype.fn = function fn() {};
let obj = {
  name: "zhufeng",
  age: 12,
  [Symbol("AA")]: 100,
  0: 200,
  1: 300,
  cxk: { xhz: "蔡徐坤" },
};

for (let key in obj) {
  if (!obj.hasOwnProperty(key)) break;
  console.log(key);
}
let keys = Object.keys(obj);
if (typeof Symbol !== "undefined") {
  // 判断浏览器是否支持Symbol
  keys = keys.concat(Object.getOwnPropertySymbols(obj));
}
console.log(keys);
// keys.forEach((key) => {
//   console.log("属性名：", key);
//   console.log("属性值：", obj[key]);
// });
