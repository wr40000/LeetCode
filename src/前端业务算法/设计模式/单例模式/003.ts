export { }
interface myWindow {
    hello: any
}
function myWindow() {
}
myWindow.prototype.hello = function () {
    console.log('hello');
}

let createInstance = (function () {
    let instance: myWindow;
    return function () {
        if (!instance) {
            instance = new (myWindow as any)();
        }
        return instance;
    }
})();

let window1 = createInstance();
let window2 = createInstance();
window1.hello();
console.log(window1 === window2)