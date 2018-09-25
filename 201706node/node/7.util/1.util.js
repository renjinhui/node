function Parent(name) {
    this.name = name
}
Parent.prototype.home = '北京';
function Child() {
    this.age = 8;
}
let util = require('util');
// 类型判断 typeof instanceof constructor Object.prototype.toString.call
console.log(util.isArray({})); //util库可以进行类型检测

//4.es6 extends 是公私都会继承
//只继承共有属性

//Object.setPrototypeOf(Child.prototype,Parent.prototype);
util.inherits(Child,Parent); //继承使用util里的方法

//3.只继承公有属性
//Child.prototype.__proto__ = Parent.prototype;
/*function create(ParentProto) {
    function Fn() {}
    Fn.prototype = ParentProto; //只保留父类的公有方法
    return new Fn;
}
Child.prototype = Object.create(Parent.prototype);*/
let child = new Child();
console.log(child.home);

//2.只继承私有 将父类方法在子类中执行一次 并且让this是当前子类的实例
//Parent.call(this,...arguments);
/*let child = new Child('hello');
console.log(child.name);*/

//1.实例继承
/*Child.prototype = new Parent();
let child = new Child;
console.log(child.name);*/
