// 球队信息不依赖具体实现
// 面向接口即面向抽象编程
class Fruit {
    constructor(name) {
        this.name = name
    }
}
class Tropical {
    // 此处的参数，是teamInfo的一个实例，不直接依赖具体的实例
    // 面向抽象
    constructor(fruit) {
        this.fruit = fruit;
    }
    info() {
        console.log(this.fruit.name)
    }
}
// 将依赖关系放到此处来管理，控制权也放到此处
// Tropical和Fruit之间不再有直接依赖
// 原本直接掌握Fruit控制权的Tropical不再直接依赖
// 将依赖控制，落在此处(第三方模块专门管理)即为控制反转
var ym = new Tropical(new Fruit('香蕉'))
ym.info()
var kobe = new Tropical(new Fruit('菠萝'))
kobe.info()