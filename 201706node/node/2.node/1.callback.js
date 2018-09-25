// 回调 将作参数后续的逻辑当传入到方法中
function cook(cb) {
    setTimeout(function () {
        cb();
    },3000);
}
function eat() {
    console.log('吃')
}
cook(eat);
//解决异步问题,异步代码永远在同步之后执行
//node 版本mac可以采用nvm  如果是windows 可以使用nvm-windows