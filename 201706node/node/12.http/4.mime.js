let http = require('http');
let fs = require('fs');
let mime = require('mime'); //模块解决文件类型的
let url = require('url'); //url.parse
let listener = (req,res) =>{
    let {query,pathname} = url.parse(req.url,true);
    if(pathname === '/'){  // /要特殊处理
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    else {
        if(fs.existsSync(`.${pathname}`)){
            //安装mime 第三方 npm install mime --save
            //mime.lookup(pathname) 可以通过路径的后缀判断出是什么类型的
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream(`.${pathname}`).pipe(res);
        }else{
            res.statusCode = 404;
            res.end();
        }
    }
    /*else if(pathname === '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.createReadStream('./index.css').pipe(res);
    }else if(pathname === '/index.js'){
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        fs.createReadStream('index.js').pipe(res);
    }*/


};
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});