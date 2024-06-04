const handler = {
  get(target, prop, receiver) {
    // return Reflect.get(target, prop, receiver);
    return target[prop];
  },
};

const obj = {
  a: 1,
  fn(){
    console.log(this);
    return this
  },
};

const proxyObj = new Proxy(obj, handler);

proxyObj.fn()
// console.log(proxyObj.a); // Output: 1
// console.log(proxyObj.c); // Output: Property c not found, checking prototype chain...
