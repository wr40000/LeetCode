// 参考文献
// + https://juejin.cn/post/6914216540468576263?searchId=20240402145632B8E89B0D7665A299D006
// + https://bubuzou.com/2021/04/02/write-js-hand-by-hand/

function Animal() {
  this.colors = ["black", "white"];
  this.name = { name: "父类" };
}
Animal.prototype.getColor = function () {
  return this.colors;
};
function Dog() {}
Dog.prototype = new Animal();

let dog1 = new Dog();
dog1.name.name = "TERRARIA"; // 会影响父类属性
dog1.name = "TERRARIA";  // 不会影响父类属性
let dog2 = new Dog();

console.log(dog2.name);

/**
 * 问题1：原型中包含的引用类型属性将被所有实例共享；
 * 问题2：子类在实例化的时候不能给父类构造函数传参；
 */

// let dog1 = new Dog();后子类并没有name,colors属性，但是可以通过原型链找到父
// 类的属性，当更改时，dog1.name = "TERRARIA";实际上是在子类实例添加了一个新
// 的 name 属性，并将其值设置为 "TERRARIA"。
