// 10个数 10个字节 每次读4b 写1b
let fs = require('fs');
function pipe(source,target) {
    let rs = fs.createReadStream(source);
    let ws = fs.createWriteStream(target);
    rs.pipe(ws);//可读流导入到可写流中，异步的操作
    // 可以保证内存不会淹没，读一点写一点
    // pipe  readFile writeFile
    // 如果想看文件内容 使用readFile
}
pipe('1.txt','2.txt');