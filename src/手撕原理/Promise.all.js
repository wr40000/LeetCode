import Promise from './Promise.js'

export function extendMyPromise(Promise) {
  Promise.prototype.all = (promises) => {
    promises = Array.from(promises);
    return new Promise((resolve, reject) => {
      let len = promises.length;
      let result = [];
      if (len == 0) {
        resolve(result);
      } else {
        for (let i = 0; i < len; i++) {
          Promise.resolve(promises[i]).then(
            (data) => {
              result[i] = data;
              if (i == len - 1) {
                resolve(result);
              }
            },
            (e) => {
              reject(e);
              return;
            }
          );
        }
      }
    });
  };

  Promise.prototype.resolve = (value) => {
    if (value instanceof Promise) return value;
    return new Promise((resolve) => resolve(value));
  };
}
