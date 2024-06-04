let obj = { 
    func1: function () { 
        console.log(this); 
    }, 
    func2: () => { 
        console.log(this); 
    } 
};

var list = [obj.func1, obj.func2]; 
var a1 = obj.func1; 
var a2 = obj.func2;

obj.func1(); 
obj.func2(); 
a1(); 
a2(); 
list[0](); 
list[1]();
