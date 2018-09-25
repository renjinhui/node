let fs = require('fs');
//1.文件不存在会创建，如果存在会先清空文件内容，再将内容写入
//2.highWaterMark 每次能写多少 16k
//3.defaultEncoding utf8 写入是字符串
let ws = fs.createWriteStream('./2.txt',{highWaterMark:1});
var flag = ws.write('1'); //write方法中只能放字符串或者buffer，异步方法,每次调用write方法都会返回一个boolean类型,代表的是是否能继续写入
console.log(flag); //淹没可用内存，所以我们应该根据flag的值来判断，如果为false就不要继续了
var flag = ws.write('1');
console.log(flag);
ws.on('drain',function () {//抽干方法，内存中干净了，会调用此方法
    console.log('干了');//一般恢复读取
});
ws.end('吃饱了');//结束如果调用end会强制将内存中的内容全部写入关闭文件,如果end中传递了参数会用write方法将内容写入文件

//假如文件1g大，每次写16k，已经写不下了，先暂停不要在读了，等我把内存空间的和当前可写流中的内容全部写入后在继续读取
//res.write() res是一个可写流