/*
 * 谈谈你对this的了解及应用场景?
 *   + this的五种情况分析
 *     this执行主体，谁把它执行的「和在哪创建&在哪执行都没有必然的关系」
 *     Q1:函数执行，看方法前面是否有“点”，没有“点”，this是window「严格模式下是undefined」，有“点”，“点”前面是谁this就是谁
 *     Q2:给当前元素的某个事件行为绑定方法，当事件行为触发，方法中的this是当前元素本身「排除attachEvent」
 *     Q3:构造函数体中的this是当前类的实例
 *     Q4:箭头函数中没有执行主体，所用到的this都是其所处上下文中的this
 *     Q5:可以基于Function.prototype上的call/apply/bind去改变this指向
 *   + 手撕call/bind源码
 *   + 掌握this的好玩应用：鸭子类型
 */

// Q1
// const fn = function fn() {
//     console.log(this);
// };
// let obj = {
//     name: 'OBJ',
//     fn: fn
// };
// fn();
// obj.fn();

// Q2
// document.body.addEventListener('click', function () {
//     console.log(this);
// });

// Q3
// function Factory() {
//     this.name = '珠峰培训';
//     this.age = 12;
//     console.log(this);
// }
// let f = new Factory;

// Q4

// +第一个 setTimeout 中使用的是普通的函数表达式，它会在全局作用域中执行，
//   因此 this 指向全局对象 Window（或 global）。
// +第二个 setTimeout 中使用的是箭头函数，箭头函数的 this 始终指向其定义时的
//   上下文，因此在这里它指向了 demo 对象。
// let demo = {
//     name: 'DEMO',
//     fn() {
//         console.log(this);

//         setTimeout(function () {
//             console.log(this);
//         }, 1000);

//         setTimeout(() => {
//             console.log(this);
//         }, 1000);
//     }
// };
// demo.fn();

// Q5
function func(x, y) {
  console.log(this, x, y);
}
let obj = 3;
// 原理：就是利用 “点”定THIS机制，context.xxx=self “obj.xxx=func” => obj.xxx()
// context上添加一个属性key = Symbol("key")，值就是指向函数本身的this，
// 这样通过context[key]调用函数，自然也就改变了this指向
Function.prototype.call = function (context, ...parms) {
  // this/self->func  context->obj  params->[10,20]
  let self = this;
  let key = Symbol("key");
  let result;
  context = context == null ? window : context;
  context = !/^(object|function)$/i.test(typeof context)
    ? Object(context)
    : context;
  context[key] = self;
  result = context[key](...parms);
  delete context[key];
  return result;
};
// func.call(obj, 10, 20);

// func函数基于__proto__找到Function.prototype.call，把call方法执行
//   在call方法内部「call执行的时候」  call(context->obj,...params->[10,20])
//     + 把func中的this改为obj
//     + 并且把params接收的值当做实参传递给func函数
//     + 并且让func函数立即执行
// func.call(obj, 10, 20);
// func.apply(obj, [10, 20]);

Function.prototype.bind = function (context, ...params) {
  let self = this;
  return function proxy(...args) {
    self.apply(context, params.concat(args));
  };
};

func.bind(obj)(10, 20);

// func函数基于__proto__找到Function.prototype.bind，把bind方法执行
//   在bind方法内部
//     和call/apply的区别：并没有把func立即执行
//     把传递进来的obj/10/20等信息存储起来「闭包」
//     执行bind返回一个新的函数 例如:proxy，把proxy绑定给元素的事件，
//     当事件触发执行的是返回的proxy，在proxy内部，再去把func执行，把this和值都改
//     变为之前存储的那些内容
// document.body.addEventListener('click', func.bind(obj, 10, 20));
// document.body.addEventListener('click', proxy)