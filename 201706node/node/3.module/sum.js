let obj = {
    '+'(...arr){ // [1,2,3]
        return arr.reduce((prev,next,index,arr)=>{
            return prev+next;
        });
    }
};
let obj1 = {
    a:1
};
//导出多个
//1.exports.obj = obj;
//  exports.obj1 = obj1;
Object.assign(module.exports,obj,obj1);

//module.exports和exports是同一个空间,可以给exports增加属性或者 赋值给module.exports




/*function sum(){
    return 3
}*/

/*
* (function(){
* function sum(){
    return 3
 }
*
* })()
*
*
*
* */

// console.log(obj["+"](1,2));
//分别使用 exports 和module.exports 实现模块的导出