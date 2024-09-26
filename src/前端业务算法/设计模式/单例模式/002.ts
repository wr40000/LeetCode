let myWindow = (function () {
    let window: typeof myWindow;
    let myWindow = function (this: any) {
        if (window) {
            return window;
        } else {
            return (window = this);
        }
    }
    myWindow.prototype.hello = function () {
        console.log('hello');
    }
    return myWindow;
})();

let window1 = new (myWindow as any)();
let window2 = new (myWindow as any)();
window1.hello();
console.log(window1 === window2)