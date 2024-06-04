// 1.
// console.log(a);
// console.log(foo());

// var a = 1;
// function foo(){
//     return 2
// }

// 2.
console.log(1);

setTimeout(()=>console.log(2))

Promise.resolve(()=>{
    console.log(3);
    resolve(4)
}).then(()=>{
    console.log(5);
})

setTimeout(()=>{
    Promise.resolve(()=>{
        console.log(6);
        resolve()
    }).then(()=>{
        console.log(7);
    }).then(()=>{
        console.log(8);
    })
})

console.log(9);