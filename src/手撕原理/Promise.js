// npx babel src\手撕原理\Promise.js --out-dir dist

let PENDING = "PENDING";
let RESOLVED = "RESOLVE";
let REJECTED = "REJECT";

const resolvePromiseX = (promise, x, resolve, reject) => {
  if (promise === x) {
    reject(new TypeError("chaining cycle detected for promise #<Promise>"));
  }
  if ((x && typeof x === "object") || typeof x === "function") {
    let called = false;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromiseX(promise, y, resolve, reject);
          },
          (r) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
};

class MyPromise {
  constructor(execute) {
    this.state = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallBacksQueue = [];
    this.onRejectedCallBacksQueue = [];
    let resolve = (value) => {
      if (this.state == PENDING) {
        this.state = RESOLVED;
        this.value = value;
        this.onResolvedCallBacksQueue.forEach((cb) => {
          cb();
        });
      }
    };

    let reject = (reason) => {
      if (this.state == PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        this.onRejectedCallBacksQueue.forEach((cb) => {
          cb();
        });
      }
    };

    try {
      execute(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onfulfilled, onrejected) {
    onfulfilled =
      typeof onfulfilled === "function" ? onfulfilled : (value) => value;
    // onrejected 未定义，则注意默认应为 (reason) => {throw reason}
    onrejected =
      typeof onrejected === "function"
        ? onrejected
        : (reason) => {
            throw reason;
          };
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === RESOLVED) {
        // 异步获取then返回的 promise
        setTimeout(() => {
          try {
            let x = onfulfilled(this.value);
            resolvePromiseX(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onrejected(this.reason);
            resolvePromiseX(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      }
      if (this.state === PENDING) {
        // 这里包装成自执行函数放到队列
        this.onResolvedCallBacksQueue.push(() => {
          setTimeout(() => {
            try {
              let x = onfulfilled(this.value);
              resolvePromiseX(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
        this.onRejectedCallBacksQueue.push(() => {
          setTimeout(() => {
            try {
              let x = onrejected(this.reason);
              resolvePromiseX(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    });
    return promise2;
  }
  catch(onrejected) {
    return this.then(null, onrejected);
  }
}

MyPromise.prototype.all = (promises) => {
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
MyPromise.prototype.resolve = (value) => {
  if (value instanceof Promise) return value;
  return new Promise((resolve) => resolve(value));
};

window.MyPromise = MyPromise;

// export default Promise;

// 测试 Promise A+ 规范
// module.exports = Promise;

// Promise.defer = Promise.deferred = function () {
//   let dfd = {};
//   dfd.promise = new Promise((resolve, reject) => {
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   });
//   return dfd;
// };
