let str = "Hello World";

let test1 = /[a-z]/g;

console.log(str.replace(test1, (item)=>{
    console.log(item);
    return item.toUpperCase();
})); // true