// typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function 
// 等类型的数据，但是对于其他的都会认为是 object，比如 Null、Date 等，所以通过 
// typeof 来判断数据类型会不准确。但是可以使用 Object.prototype.toString 实现。

// js中有以下几种数据类型：

// 1.七种基本数据类型：

// - **布尔值（Boolean）**，有 2 个值分别是：true 和 false.
// - **null**，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与
//    Null、NULL或变体完全不同。
// - **undefined**，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
// - **数字（Number）**，整数或浮点数，例如： 42 或者 3.14159。
// - **字符串（String）**，字符串是一串表示文本值的字符序列，例如："Howdy" 。
// - **代表（Symbol）**( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
// - **任意精度的整数 (BigInt)** ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。

// 2.以及**对象（Object）**，即引用类型。包括 Object Array、Function 等。

/**
 * typeof
 * constructor
 * instanceof
 * Object.prototype.toString.call(obj) 
 */