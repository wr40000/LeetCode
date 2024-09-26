// 5.2.2 ES5单例模式
interface myWindow {
    hello: any
}
function myWindow() { }
myWindow.prototype.hello = function () {
    console.log('hello');
}
myWindow.getInstance = (function () {
    let window: myWindow;
    console.log('getInstance自执行函数');
    
    return function () {
        if (!window)
            window = new (myWindow as any)();
        return window;
    }
})();
debugger
let my_window001 = myWindow.getInstance();
let my_window002 = myWindow.getInstance();
console.log(my_window001 === my_window002); // true

// my_window001.hello();