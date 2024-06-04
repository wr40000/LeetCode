class OnlyOne {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }
  getName() {
    console.log(this.name);
  }
  getInstance(name) {
    if (!this.instance) {
      this.instance = new OnlyOne(name);
    }
    return this.instance;
  }
}

let onlyOne = new OnlyOne();

let a = onlyOne.getInstance("a");
let b = onlyOne.getInstance("b");
console.log(a === b); // true
