//改变this指向 1)let that = this;
//            2) bind bind只能绑定一次，多次绑定无效
//            3) 箭头函数，如果是箭头函数，函数中则没有this指向，自己家找不到会去上一级找，从而解决了this问题 （没有arguments）

/*function sum(a,b) {
    return a+b;
}
let sum = (a,b) =>a+b;*/

/*function total(a) {
    return function (b) {
        return a+b;
    }
}*/
let total = a => b => a + b; //高阶函数
console.log(total(1)(2));
/*
let obj = {
    a:function () {
        setTimeout(() => {
            console.log(this);
        })
    }
};
obj.a();*/
