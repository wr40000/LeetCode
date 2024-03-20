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
