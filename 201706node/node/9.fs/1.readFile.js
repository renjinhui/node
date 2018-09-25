let fs = require('fs');
//1.读文件可以采用相对路径
//2.可以采用绝对路径需要path模块
//3.不能采用/的路径 读取的是当前磁盘的根路径
//4.读取文件时文件必须存在
/*
let name = fs.readFileSync('./name.txt','utf8');
let age = fs.readFileSync('./age.txt','utf8');
console.log({name,age});*/
// try catch可以捕获同步错误 error-first

//1.将两个异步请求在同一时刻同步
//1) 可以采用回调套回调
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
function out() {
    if(Object.keys(obj).length === 2)
    console.log(obj);
}


