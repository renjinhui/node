//(异步编程) 回调函数 将后续的逻辑做为参数传递给函数
// 回调函数需要手动传入回调
function read(cb) {
    setTimeout(()=>{
        let str = 'hello';
        cb(str);
    },3000);
}
//一个文件内存放的是1.txt 去读1.txt 放的是2.txt
read(function (str) {
    console.log(str);
});