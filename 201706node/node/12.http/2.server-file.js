let http = require('http'); //核心模块
let fs = require('fs');
//listen EADDRINUSE :::8080 端口占用
let listener = (req,res) =>{
    res.setHeader('Content-Type','text/html;charset=utf-8');
    /*fs.readFile('index.html',function (err,data) {
        res.end(data);
    });*/
    //读取文件导入到res中
    fs.createReadStream('index.html').pipe(res);
    //根据不同的路径 返回不同的结果 -> 路由
};
//创建一个服务，放入一个监听函数
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});