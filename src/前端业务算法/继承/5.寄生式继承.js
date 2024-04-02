// 使用原型式继承对一个目标对象进行浅复制，增强这个浅复制的能力

function objectCopy(obj) {
  function Fun() {}
  Fun.prototype = obj;
  return new Fun();
}

function createAnother(original) {
  let clone = objectCopy(original);
  clone.getName = function () {
    console.log("getName: ", this.name);
  };
  return clone;
}

let person = {
  name: "yhd",
  friends: ["rose", "tom", "jack"],
};

let person1 = createAnother(person);
console.log(person1);
console.log(Object.getOwnPropertyNames(person1));
person1.friends.push("lily");
console.log(person1.friends);
person1.getName(); // yhd

let person2 = createAnother(person);
console.log(person2.friends); // ["rose", "tom", "jack", "lily"]
