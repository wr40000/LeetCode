// 调用了 2 次父类构造函数

function Parent(name) {
    this.name = name
    this.colors = ["red", "blue", "yellow"]
 }
 Parent.prototype.sayName = function () {
    console.log(this.name);
 }
 
 function Child(name, age) {
    // 继承父类属性
    Parent.call(this, name)
    this.age = age;
 }
 // 继承父类方法  --解决 2.借用构造函数实现继承.js的问题
//   + 即访问Parent.prototype上定义的方法
 Child.prototype = new Parent();
 
 Child.prototype.sayAge = function () {
    console.log(this.age);
 }
 
 let child1 = new Child("yhd", 19);
 child1.colors.push("pink");
 console.log(child1.colors); // ["red", "blue", "yellow", "pink"]
 child1.sayAge(); // 19
 child1.sayName(); // "yhd"
 
 let child2 = new Child("wxb", 30);
 console.log(child2.colors);  // ["red", "blue", "yellow"]
 child2.sayAge(); // 30
 child2.sayName(); // "wxb"
 
//  组合继承综合了原型链继承和盗用构造函数继承(构造函数继承)，将两者的优点结合了
//  起来，

// 基本的思路就是使用原型链继承原型上的属性和方法，而通过构造函数继承实例属性，
// 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性

// 父类的方法可以复用
// 可以在Child构造函数中向Parent构造函数中传参
// 父类构造函数中的引用属性不会被共享