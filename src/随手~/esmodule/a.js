// calculator.js
let count = 0
let obj = {
    num:0
}
const add = function (a, b) {
    count += 1
    obj.num += 1
    return a + b
}
export { count, add, obj }