function defineReactive(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function defineGet() {
      console.log(`get key: ${key} value: ${value}`);
      return value;
    },
    set: function defineSet(newVal) {
      console.log(`set key: ${key} value: ${newVal}`);
      value = newVal;
    },
  });
}
function observe(data) {
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key]);
  });
}
let arr = [1, 2, 3];
observe(arr);

arr[3] = 3;
console.log(arr[3]);
//   arr.push(1)
//   arr.unshift(1)
// arr.pop();
