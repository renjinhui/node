// 10个数 10个字节 每次读4b 写1b
let fs = require('fs');
function pipe(source,target) {
    //1.先创建可读流 4b 在创建可写流 1b
    let rs = fs.createReadStream(source,{highWaterMark:4});
    let ws = fs.createWriteStream(target,{highWaterMark:1});
    //2.先读一次 rs.on('data');
    rs.on('data',function (chunk) {
        //3.将读到的内容写入到目标中，返回一个boolean 默认情况应该是false,暂停读取
        if(ws.write(chunk)===false){
            rs.pause();
        }
    });
    //4.ws.on('drain')抽干后，恢复读取,打印干了几次
    ws.on('drain',function () {
        console.log('干了');
        rs.resume();
    });
    //5.监听读取完毕后事件 rs.on('end') 关闭写入的文件 ws.end();
    rs.on('end',function () {
        ws.end();
    });
}
pipe('1.txt','2.txt');