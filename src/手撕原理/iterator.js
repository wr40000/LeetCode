// iterator 迭代器
// 部分数据结构实现了迭代器规范
//    + Symbol.iterator
//    + 数组/部分类数组/Set/Map...「对象没有实现」
// for of循环的原理是按照迭代器规范遍历的

let arr = [1, 2, 3, 4];
arr[Symbol.iterator] = function () {
  let self = this;
  let i = 0;
  return {
    // 必须具备next方法，执行一次next方法，拿到结构中的某一项的值
    next() {
      if (i > self.length - 1) {
        return { done: true, value: self[i] };
      }
      return {
        done: false,
        value: self[i++],
      };
    },
  };
};

let ator = arr[Symbol.iterator]();
let result = ator.next();
result = ator.next();
result = ator.next();
result = ator.next();
console.log(result);

// 类数组对象「默认不具备迭代器规范」
let obj = {
    0: 200,
    1: 300,
    2: 400,
    length: 3
};
obj[Symbol.iterator] = Array.prototype[Symbol.iterator];
for(let value of obj){
    console.log(value);
}