let red = () => {
    console.log('red');
}
let green = () => {
    console.log('green');
}
let yellow = () => {
    console.log('yellow');
}

var light = (time, cb) => {
    setTimeout(() => {
        cb();
    },time)
}

let step = (cb) => {
    light(3000, ()=>{
        red();
        light(2000, ()=>{
            green();
            light(1000, ()=>{
                yellow();
                step();
            });
        });
    });
    typeof cb === 'function' && cb();
}

step(() => console.log("wait for about 3 seconds..."))