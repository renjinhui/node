// 进制转化 任意进制转任意进制 toString
// 任意进制转10进制 parseInt
// '111111'2进制 转化成16进制
//常用的两个方法可以做进制转化使用
console.log((100).toString(2));
console.log(parseInt('1100100',2));
//base64 可以换成可见编码一共64位
//不是加密算法 md5 摘要算法，不可逆
//将一个汉字 3*8 = 6*4
let buffer = new Buffer('姜');
console.log(buffer); //e5 a7 9c
console.log((0xe5).toString(2));
console.log((0xa7).toString(2));
console.log((0x9c).toString(2));
//111001 011010 011110 011100  值永远不会大于63-0
console.log(parseInt('111001',2));
console.log(parseInt('011010',2));
console.log(parseInt('011110',2));
console.log(parseInt('011100',2));
// 57 26 30 28
let str='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
console.log(str[57]+str[26]+str[30]+str[28]);


