function read() {
    //executor 执行器
    //resolve,reject 函数类型
    //resolve就是then中对应的第一个函数
    //reject 就是then中对应的第二个函数
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            let str = 'hello';
            resolve(str); //成功时将结果传入到then的回调函数中
        },3000)
    });
}
//只有promise的实例上才有then方法
read().then(function (data) {
    console.log(1,data);
},function (data) {
    console.log(data);
});
//callback -> promise -> async await