let fs = require('fs');
//在default setting中配置语法
//1.读取的文件必须存在，不存在则报错
//2.highWaterMark 最高水位线 每次最多读64k
//3.读取的内容都是buffer类型
let rs = fs.createReadStream('./1.txt',{highWaterMark:1});
//rs 代表的是可读流的实例, 非流动模式 -> 流动模式


let buff1 =  new Buffer('珠峰');
let buff2 =  new Buffer('珠峰');
console.log(Buffer.concat([buff1, buff2]).toString());

//在内部会不断触发 rs.emit('data',数据),水管开启后，数据会疯狂的触发data事件
let arr = [];
// 最靠谱的 将buffer一个个拼到一起 Buffer.concat(Array buffer)
rs.on('data',function (chunk) { //chunk是buffer类型
    arr.push(chunk);
    console.log(chunk);
    rs.pause();
    setTimeout(function () {
        rs.resume();
    },1000);
});
//当文件读取完毕后，会自动触发一次end事件，没有读取完是不会触发的
rs.on('end',function () {
    console.log(Buffer.concat(arr).toString());
});
rs.on('error',function (err) { //监控错误
    console.log(err);
});
// rs.resume() 恢复读取 rs.pause() 暂停读取  是否继续触发data事件
//req是一个可读流