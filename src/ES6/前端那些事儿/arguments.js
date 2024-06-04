function fn(){
    console.log("arguments.length: ",arguments.length);
}

fn(1,2,3,4,5); // [1, 2, 3, 4, 5]

Function.prototype.sayBefore = function(cb){
    let self = this;
    return (...arg)=>{
        cb();
        self(...arg)
    }
};
let newFn = fn.sayBefore((someData)=>{
    console.log("someData ", someData);
})

Function.prototype.bind = function(context, ...params){
    let self = this;
    return function proxy(...arg){
        self.apply(context, params.concat(...arg))
    }
}