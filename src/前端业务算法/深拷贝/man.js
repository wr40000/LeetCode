const obj = {
  name: "xiaohei",
  bool: true,
  nul: null,
  undef: undefined,
  show: function () {
    console.log("show function");
  },
  num: 20,
  set: new Set([1, 2, 3]),
  map: new Map(),
  date: new Date(),
  reg: /.xml/g,
  info: {
    msg: "old msg",
  },
  sym: Symbol("a"),
};
obj.obj = obj;
obj.map.set("mapKey", "map-value");
obj.map.set("obj", obj);
const sym = Symbol("sym");
obj[sym] = 1;

const newObj = deepCloneMy(obj);
console.log("obj: ", obj);
console.log("newObj: ", newObj);

function deepClone(target, hash = new WeakMap()) {
  if (target === null) return null;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (typeof target !== "object") return target;
  if (hash.get(target)) return hash.get(target);

  if (target instanceof Set) {
    const set = new Set();
    hash.set(target, set);
    target.forEach((value) => {
      if (typeof value === "object") {
        set.add(deepClone(value, hash));
      } else {
        set.add(value);
      }
    });

    return set;
  }

  if (target instanceof Map) {
    const map = new Map();
    hash.set(target, map);
    for (const [key, value] of target) {
      if (typeof value === "object") {
        map.set(key, deepClone(value, hash));
      } else {
        map.set(key, value);
      }
    }

    return map;
  }

  const cloneObj = new target.constructor();
  hash.set(target, cloneObj);
  Reflect.ownKeys(target).forEach((key) => {
    cloneObj[key] = deepClone(target[key], hash);
  });

  return cloneObj;
}

function deepCloneMy(target, hash = new WeakMap()) {
  if (target == null) return null;
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (typeof target !== "object") return target;
  if (hash.has(target)) return hash.get(target);

  if (target instanceof Map) {
    let newMap = new Map();
    hash.set(target, newMap);
    for (let [key, value] in target) {
      newMap.set(key, deepClone(value));
    }
    return newMap;
  }

  if (target instanceof Set) {
    let newSet = new Set();
    hash.set(target, newSet);
    target.forEach((item) => {
      newSet.add(deepClone(item));
    });
  }

  let cloneObj = new target.constructor();
  hash.set(target, cloneObj);
  Reflect.ownKeys(target).forEach((key) => {
    cloneObj[key] = deepClone(target[key], hash);
  });

  return cloneObj;
}
