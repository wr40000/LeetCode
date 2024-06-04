// calculator.js
var count = 0;
var obj = {
    num:0
}
module.exports = {
    count,
    obj,
    add: function (a, b) {
        count += 1
        obj.num += 1
        console.log(count);
        return a + b
    }
}
