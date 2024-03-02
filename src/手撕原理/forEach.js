Array.prototype.forEach = function (callback, context) {
  // this -> arr
  let self = this;
  let i = 0;
  let len = self.length;
  context = context == null ? window : context;
  for (; i < len; i++) {
    console.log(`遍历第${i}项`);
    typeof callback == "function" ? callback.call(context, self[i], i) : null;
  }
};

let arr = [1, 2, 3];
arr.forEach(
  function (item) {
    console.log(this.jntm);
    console.log(item);
  },
  { jntm: "蔡徐坤" }
);
