// index.js
import { count, add, obj } from './a.js'

console.log(count) // 0（对 calculator.js 中 count 值的引用）
add(2, 3)
add(2, 3)
add(2, 3)
console.log(obj)
console.log(count) // 1（因为是引用，所以和calculator.js中的count值保持一致）

// count += 1 // 不可更改，会报错 SyntaxError: 'count' is read-only