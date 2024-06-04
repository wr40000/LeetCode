// index.js
var count = require('./a.js').count
var add = require('./a.js').add
var obj = require('./a.js').obj

console.log(count) // 0（这里的count是对 calculator.js 中 count 值的拷贝）
add(2, 3)
add(2, 3)
console.log(count) // 0（calculator.js中变量值的改变不会对这里的拷贝值造成影响）

count += 1
console.log(count) // 1（拷贝的值可以更改）

// console.log(obj)
// add(2, 3)
// add(2, 3)
// console.log(obj)

