let x = require('./sum.js');// 后缀名可以省略 系统会默认增加 .json .js .node 后缀

//1.console.log(x.obj['+'](1,2,3,4));


console.log(x["+"](1,2,3,4));
console.log(x['a']);








/*
let x = (function () {
    module.exports = exports = {obj:obj}
   function sum() {
       return 3
   }
   //exports.sum = sum
    //module.exports = sum;
   return module.exports
})()

x()
*/
