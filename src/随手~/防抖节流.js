_fn(cb, time){
    let timer = null;
    return function(...arg){
        if(timer) return;
        timer = setTimeout(() => {
            cb.apply(this, arg);
            clearTimeout(timer);
        }, time);
    }
}

__fn(cn, time){
    let timer = null;
    return function(...arg){
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this,arg)
        },time)
    }
}