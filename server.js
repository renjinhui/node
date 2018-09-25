let http = require("http");
let url = require("url");//专门处理请求地址的模块
let fs = require("fs");
http.createServer((req, res) => {
    //req 客户端向服务器发送请求时携带的信息
    //res 服务器端响应数据时携带信息
    //req.url 获取到请求的地址 url.parse()解析请求的地址
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === "/favicon.ico") return;
    if (pathname === "/") {
        let fileCon = fs.readFileSync(__dirname + "/index.html", "utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        res.end(fileCon);
        return;
    }
    //接口地址部分：
    if (pathname === "/getList" && req.method === "GET") {
        let data = fs.readFileSync(__dirname + "/data/data.json", "utf-8");
        /*res.statusCode = 200;
        res.setHeader("Content-Type","application/json;charset=utf-8");
        res.setHeader( "Access-Control-Allow-Origin","*")*/
        res.writeHead(200, {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        res.end(data);
        return;
    }
    if (pathname === "/getAll") {
        let fn = query.cb;
        let data = fs.readFileSync(__dirname + "/data/data.json", "utf-8");
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        res.end(`${fn}(${data})`);
        return;
    }


    //静态资源文件的地址  server所在目录的绝对地址+pathname
    fs.stat(__dirname + pathname, (err, file) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain;charset=utf-8");
            res.end("页面没有找到~");
            return;
        }
        if (file.isFile()) {
            //若根据地址找到的是文件，读取文件的内容，并根据对应的文件的后缀返回对应的mime类型
            let fileCon = fs.readFileSync(__dirname + pathname, "utf-8");
            res.setHeader("Content-Type", `${mime.getType(pathname)};charset=utf-8`);
            res.end(fileCon);
            return;
        }
    })
}).listen(9090, () => {
    console.log("端口号是9090的服务启动成功！")
})