//this 在文件中直接打印this不是global属性
console.log(this);//在文件中this被更改了不在是global
var a =2;
global.a = 1; //声明的变量不会挂载在global上
console.log(a); //先找作用域声明的 找不到去global上找,挂在global上的属性可以直接访问
//console  打印的 log info warn error time timeEnd
console.time('start');
for(var i = 0; i<10000;i++){}
console.timeEnd('start'); //计时
//setTimeout
//改变this指向的方式
//1.var that = this;
//2.bind / apply call
//3.()=>{} 自己家没有this 所以this去上级找；

//将参数列表转化成数组,箭头函数中没有arguments
//1.[].slice.call(arguments)
//2.Array.from(arguments)
//3. ...arr将类数组转换成数组  console.log([...[1,2],...[3,4]]);
//{...{name:1},...{age:2}} es7语法 node不支持 可以使用babel-node转化
setTimeout(function(...arr){ // 在参数中是剩余运算符
   //console.log(a,b); //setTimeout中this指向的是自己
},1000,1,2);
//给setTimeout传递参数,传递参数 通过第三个参数传递

//setInterval
//setImmediate 立即 不支持设置时间  setImmediate和setTimeout都是 速度不一定谁快谁慢 自己写的回调一般早于setImmediate
setImmediate(function () {
    console.log('ok')
});
//process 进程 区分环境变量 一般情况下本地设置NODE_ENV;
//window使用 set NODE_ENV=dev
//mac       export NODE_ENV=dev
let url = '';
if(process.env.NODE_ENV==='dev'){
    url = 'http://localhost'
}else{
    url = 'http://128.1.1.2';
}
console.log(url);
console.log(process.pid);
process.kill(12596);//删除进程


//Buffer


