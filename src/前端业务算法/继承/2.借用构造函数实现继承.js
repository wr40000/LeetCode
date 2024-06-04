function Animal(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
  this.arr = [];
}
function Dog(name) {
  Animal.bind(this, name)();
}
let dog = new Dog("渔夫");
dog.arr.push("Ter");
let dog1 = new Dog("渔夫2号");
// console.log(dog);
// console.log(dog1);
// console.log(dog.__proto__ == dog1.__proto__);

/**创建一个空对象：new 关键字会创建一个空对象，这个对象会成为新创建的实例对象。
将构造函数的作用域赋给新对象：JavaScript 中的每个函数都有一个 prototype 属性，
它指向一个对象，这个对象包含了可以由特定类型的所有实例共享的属性和方法。new 操
作符创建的新对象会被赋予一个 __proto__ 属性，这个属性指向构造函数的 prototype
 属性。

执行构造函数：新创建的对象作为 this 上下文传递给构造函数，并执行构造函数内部
的代码。这样构造函数中的 this 关键字就指向了新创建的对象。

返回新对象：如果构造函数内部没有显式地返回一个对象，则 new 操作符会返回新创建
的对象实例。如果构造函数内部有显式地返回一个对象（不管是什么类型的对象），那么
 new 操作符会返回这个对象，而不是新创建的实例对象。 */
// let animal = new Animal("TTTTT");
// console.log(animal);

// 每次创建一个 Dog 实例时，都会执行一次 Animal 构造函数，并在其中创建
// 一个新的 arr 属性，使得每个 Dog 实例都拥有自己的 arr 属性，从而避免
// 了属性共享的问题。

// 借用构造函数实现继承解决了原型链继承的 2 个问题：
// 引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，
// 所以会导致每次创建子类实例都会创建一遍方法。
// 子类不能访问父类原型上定义的方法（即不能访问Animal.prototype上定义的
// 方法），因此所有方法属性都写在构造函数中，每次创建实例都会初始化
