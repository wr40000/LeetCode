function fn1(){
    let a= 1;
    let fn = ()=>{
        console.log(this);
    };
    fn()
}

fn1()

console.log(this);