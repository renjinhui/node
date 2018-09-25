let fn = () =>{
    console.log('hello');
};
//在webpack 可以直接使用commonjs规范或者es6规范 会自动转换成可识别的模块写法
import str from './a.js';
console.log(str);
let obj1 = {name:'zfpx'};
let obj2 = {age:8};
let obj3 = {...obj1,...obj2};

//在js中引入css样式
import './index.css';
import './style.less';
import img from './1.jpg';
let oImg = document.createElement('img');
oImg.src=img;
document.body.appendChild(oImg);
