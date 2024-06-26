// 对参数对象的一种浅复制

function objectCopy(obj) {
  function Fun() { };
  Fun.prototype = obj;
  return new Fun()
}

let person = {
  name: "yhd",
  age: 18,
  work:{aa:"222"},
  friends: ["jack", "tom", "rose"],
  sayName:function() {
    console.log(this.name);
  }
}

let person1 = objectCopy(person);
person1.work.aa = "111";
console.log(person);
// person1.name = "wxb";
// person1.friends.push("lily");
// person1.sayName(); // wxb

// let person2 = objectCopy(person);
// person2.name = "gsr";
// person2.friends.push("kobe");
// person2.sayName(); // "gsr"

// console.log(person.friends); // ["jack", "tom", "rose", "lily", "kobe"]
// console.log(person2.__proto__.friends == person1.__proto__.friends)