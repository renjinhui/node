let fs = require('fs');

function read(url) {
    //new Promise需要传入一个executor 执行器
    //executor中需要传入两个函数 resolve,reject
    return new Promise((resole,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
                if(err)reject(err);
                resole(data);
        });
    });
}
//resolve,reject表示直接达到成功或失败
Promise.resolve([1,2,3]).then(function (data) {
    return [4,5,6].concat(data);
}).then(data=>{
    console.log(data);
}).catch(function () {});
//all方法时Promise类上天生自带的方法，第一参数传递的是一个数组,数组里装的是一个个的promise对象,调用后会再次返回一个promise实例,并发读取的，都成功才成功
//race 谁快结果就以谁为主，返回的结果只是数组中的某一个
/*Promise.all([read('name.txt'),read('age.txt')]).then(function (data) { //data就是数组中promise执行成功的结果（类型是数组）
    /!*let name = data[0];
    let age = data[1];*!/
    console.log(data);
}).catch(function (err) {
    console.log(err)
});*/

let obj = {}; //回调地狱 链式调用
//如果返回的是promise会调用promise的resolve，或者reject，如果成功了会放到下一个then的参数中，如果返回的不是promise那then中的结果就上一次的返回值
read('name.txt').then(function (data) {
    obj.name = data;
    return read('age.txt');//如果返回一个promise可以继续调用then方法
}).then(function (data) {
    obj.age = data;
    return obj; //将结果继续向下传递
}).then(function (obj) {
    console.log(obj);
}).catch(function (err) { //不管谁报错了都会走到catch中
    console.log(err);
});






// 缺点 套了一个promise，而且捕获了两次错误，这两个请求没有依赖关系时间叠加了
/*read('name.txt').then(function (data) {
    let obj = {};
    obj.name = data;
    read('age1.txt').then(function (data) {
        obj.age = data;
        console.log(obj)
    },function (err) {
        console.log(err);
    })
},function (err) {
    console.log(err);
});*/



/*
let obj = {};
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err) return console.log(err);
    obj.age = data;
    out();
});
*/



