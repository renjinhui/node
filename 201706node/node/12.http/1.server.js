let http = require('http'); //核心模块
let listener = (req,res) =>{
    //req代表的是客户端
    //res代表的是服务器
    //res是可写流，有write和end
    //res.write('你好');//如果不调用end 则状态一直是pending;
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('你好'); //中文会乱码
};
//创建一个服务，放入一个监听函数
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});