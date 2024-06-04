function Animal(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
  this.arr = [];
}
Animal.prototype.getColor = function () {
  return this.colors;
};

// 原型链继承
// + 构造函数无法传参
// + 引用类型共享问题
// function Dog() {}
// Dog.prototype = new Animal();

// 构造函数继承
// + 解决了引用类型共享问题
// + 可以传参
// - 无法继承父类原型上的方法
// function Dog(name){
//     Animal.call(this, name)
// }

// 组合继承
// function Dog(name,age){
//     this.age = age;
//     Animal.call(this, name)
// }
// Dog.prototype = new Animal();

// 原型式继承
// 对参数对象的浅复制
// let person = {
//   name: "yhd",
//   age: 18,
//   friends: ["jack", "tom", "rose"],
//   sayName: function () {
//     console.log(this.name);
//   },
// };
// let person1 = cloneObj(person);
// function cloneObj(obj) {
//     function Fun(){};
//     Fun.prototype = person;
//     return new Fun()
// }

// 寄生式继承
// 使用原型式继承对一个目标对象进行浅复制，增强这个浅复制的能力
// let person = {
//     name: "yhd",
//     age: 18,
//     friends: ["jack", "tom", "rose"],
//     sayName: function () {
//       console.log(this.name);
//     },
//   };
//   let person1 = createAnother(person);
// function createAnother(obj){
//     let new = clone(obj)
//     new.prototype.getName(name){
//         // ...
//     }
//     return new
// }
// function cloneObj(obj) {
//     function Fun(){};
//     Fun.prototype = person;
//     return new Fun()
// }

// 组合寄生继承
function cloneObj(obj) {
  function Fun() {}
  Fun.prototype = person;
  return new Fun();
}

function inheritPrototype(child, parent) {
  let prototype = clone(parent.prototype);
  prototype.constructor = child;
  Child.prototype = prototype;
  return child;
}

inheritPrototype(Child, Parent);

function Parent(name) {
  this.name = name;
  this.friends = ["rose", "lily", "tom"];
}

Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
