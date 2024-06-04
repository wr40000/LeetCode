class Bus{
    constructor(){
        this.arr_ = [];
    }
    on(fn){
        this.arr_.push(fn);
    }
    emit(len){
        this.arr_.forEach(fn => fn(len));
    }
}


let bus = new Bus();
bus.on((len) => {
    if(len % 2 === 0){
        console.log('偶数');
}});
bus.on((len) => {
    if(len % 2 === 1){
        console.log('偶数');
}});

function fn(count){
    console.log(count);
    bus.emit(count);
}

fn(1)
console.log("*********");
fn(2)

