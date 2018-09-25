let fs = require('fs');
function read(url) {
    return new Promise((resole,reject)=>{
        fs.readFile(url,'utf8',function (err,data) {
                if(err)reject(err);
                resole(data);
        });
    });
}
//es7 async await 解决异步问题，基于promise，这两个关键字要一起使用 7.6+版本
async function getData() {
   /* let name = await read('name.txt'); //await后面只能跟promise对象
    let age = await read('age.txt');*/
   try{ //可以使用try catch捕获异常
       let result =await Promise.all([read('name1.txt'),read('age.txt')]);
   }catch(e){
       console.log(e);
   }
}
getData();
//promise 1，解决多层嵌套 回调地狱 ，2.异步请求同步结果的问题
