function objectFactory() {
  // 创建一个新对象，obj
  var obj = new Object();

  // 从参数中取出构造函数
  Constructor = [].shift.call(arguments);
  console.log(arguments);

  // 将新对象的 __proto__ 指向构造函数的 prototype，从而继承原型链上的属性和方法
  obj.__proto__ = Constructor.prototype;

  // 将新对象作为 this 绑定到构造函数上，并传入剩余的参数
  var ret = Constructor.apply(obj, arguments);

  // 返回构造函数显式返回的对象（如果是对象类型），否则返回新创建的对象
  return typeof ret === "object" ? ret || obj : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
  // return {}; // Uncomment this to see the effect of returning an object explicitly
}

var person = objectFactory(Person, "Alice", 30);
