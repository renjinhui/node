let fs = require('fs');
//1.写入文件不会报错 没有会创建，如果文件有内容会清空在写入
//2.写入时采用utf8格式
//3.如果是写入对象需要转化成json字符串
// fs.writeFileSync('./1.txt',new Buffer('珠峰'));

fs.writeFile('./1.txt','aaaa',function (err) {
    if(err)console.log(err);
});

