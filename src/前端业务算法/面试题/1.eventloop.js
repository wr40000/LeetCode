console.log("1");

new Promise((resolve) => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
    resolve();
  },100)
}).then(() => {
    console.log("4");
})

setTimeout(() => {
    console.log("5");
},100)

console.log("6");

Promise.resolve().then(() => {
    console.log("7");
})

console.log("8");