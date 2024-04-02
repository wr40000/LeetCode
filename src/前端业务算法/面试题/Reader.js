// 字节
// 为Array实现一个Reader
// 为Array实现一个Reader，通过接口getReader获取，Reader有一个接口read(n)
// 每次调用会按顺序读取数组的n（默认为1）个元素
// 调用不会改变数组本身的值
// 若数组已全部读取完则返回空数组
// 若传入的参数不为正整数则抛出异常

// 作者：riiise
// 链接：https://www.nowcoder.com/discuss/353158078776418304?sourceSSR=users
// 来源：牛客网

// wr --2024/3/28 自写
Array.prototype.getReader = function () {
    // 在这里写答案
    let self = this;
    let count = 0;
    return {
      read(k) {
        debugger;
        let is = false;
        if (!k) {
          is = true;
          k = 1;
        }
        if (typeof k !== "number" || k - Math.floor(k) !== 0 || k < 0) {
          return "error";
        }
        if (is) {
          k = 0;
        }
        let arr = null;
        if (count >= self.length) return [];
        if (count + k <= self.length) {
          k = k == 0 ? 1 : k;
          arr = self.slice(count, count + k);
          count = count + k;
          return arr;
        } else {
          arr = self.slice(count, self.length);
          count = self.length;
          return arr;
        }
      },
    };
  };
  // example
  const arr = [1, 2, 3, 4, 5, 6];
  const reader = arr.getReader();
  console.log(reader.read("1")); // Error
  console.log(reader.read(-1)); // Error
  console.log(reader.read(1.5)); // Error
  console.log(reader.read()); // [1]
  console.log(reader.read(1)); // [2]
  console.log(reader.read(2)); // [3, 4]
  console.log(reader.read(3)); // [5, 6]
  console.log(reader.read()); // []
  console.log(arr); // [1, 2, 3, 4, 5, 6]