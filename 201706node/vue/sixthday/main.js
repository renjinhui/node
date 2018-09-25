//如果一个个导出需要使用解构赋值来解析

/*import  { str,a }  from './A.js'
console.log(str);
a();*/
//一般情况import要写到最上面
import * as obj from './A.js'
console.log(obj.str);
obj.a();
//默认导出可以使用默认名字引用
import qq from './B.js';
console.log(qq);