function concurRequest(urls, nums) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let count = 0;
    let len = urls.length;
    async function request() {
      console.log("1");
      if (index == len) {
        return;
      }
      let i = index;
      index++;
      try {
        let val = await fetch(urls[i]);
        result[i] = val;
      } catch (error) {
        result[i] = error;
      } finally {
        count++;
        if (count === len) {
          resolve(result);
        }
        request();
      }
    }
    const times = Math.min(len, nums);
    for (let i = 0; i < times; i++) {
      request();
    }
  });
}


Promise.resolve().then(()=>{
  console.log(0);
  return Promise.resolve(4)
}).then((res)=>{
  console.log(res);
})
Promise.resolve().then(()=>{
  console.log(1);
}).then(()=>{
  console.log(2);
}).then(()=>{
  console.log(3);
}).then(()=>{
  console.log(5);
}).then(()=>{
  console.log(6);
})