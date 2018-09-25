//1.forEach没有返回值，不能跳出循环 for循环可以跳出循环
//2.map 映射 讲一个数组映射成一个新数组,返回什么就会把当前返回的放到一个新数组中
/*
let newArr = ['我','很','帅'].map((item,index)=>`<li>${item}<li>`);
console.log(newArr); //模板字符串使用`` 遇到变量使用${}取值
*/
//3.filter 过滤 返回值是一个过滤后的数组，如果回调函数中返回true 表示放到新数组中，返回false 表示过滤掉
/*
let newArr = [1,2,3,4,5].filter((item,index)=>item!==3);
console.log(newArr);
*/
//4.find 查找找到是数组中某一项，如果找不到返回undefined,find找到一次后就停止
/*
let item = [1,2,3].find(item=>item===3);
console.log(item);
*/

//5.includes some every 判断数组中有没有 返回boolean类型
// console.log([1,2,3].includes(3));
console.log([1,2,3].some(item=>item>3));//找true
console.log([1,4,3].every(item=>item>3));//找false 找到后就返回不继续查找

//6.reduce reduce回调函数中有几个参数 收敛 返回一个叠加后的结果
//返回结果会作为下一次的上一个
/*
let sum = [0,{count:1,price:2},{count:2,price:3},{count:2,price:3}].reduce(function (prev,current,index,oldArr) { //参数个数4
    console.log(prev,current);
    return prev+current.count*current.price;
},0);//0指的是第一项 相当于在数组前面增加了一项
console.log(sum);
*/

let flat = [[1,2],[3,4],[5,8]].reduce((prev,next)=>prev.concat(next));
console.log(flat);


//声明式