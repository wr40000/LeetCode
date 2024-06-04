const arrayHandler = {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      console.log(`Getting ${property}: ${value}`);
      return value;
    },
    set(target, property, value, receiver) {
      if (typeof property === 'string' && !isNaN(property)) {
        console.log(`Setting index ${property} to ${value}`);
      } else {
        console.log(`Setting property ${property} to ${value}`);
      }
      return Reflect.set(target, property, value, receiver);
    }
  };
  
  const array = [];
  const proxyArray = new Proxy(array, arrayHandler);
  
  // 测试添加和修改数组元素
  proxyArray.push(1); // 添加元素，触发拦截器
  proxyArray[0]
//   proxyArray[1] = 2; // 修改元素，触发拦截器
//   proxyArray[2] = 3; // 修改元素，触发拦截器
  
//   console.log(proxyArray); // [1, 2, 3]
  