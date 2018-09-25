
//请求数据的server

let http = require('http');
let url = require('url');
let fs = require('fs');
let queryString = require("querystring");
http.createServer((req,res) => {
    // console.log(req);
    // console.log(res);
    console.log(url.parse(req.url,true));
    let {pathname,query} = url.parse(req.url);
    // if(pathname === '/favicon.ico'){
    //     res.end('data:image/png;base64,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')
    // }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    switch (pathname) {
        case '/favicon.ico':
            res.end();
            return
            break;
        case '/':
            let file = fs.readFile('../index.html','utf-8',function (err,data) {
                // console.log(arguments);
                res.end(data);                
            })
            // console.log(__dirname);    
            return;
            break;
        case '/home':
            req.on('data',(data)=>{
                // console.log(data);
                let str = data.toString();
                let obj = queryString.parse(str);
                if(obj.name == 'zf'){
                    fs.readFile(__dirname + '/data/1.json', (err, data) => {
                        res.end(data)
                    })
                }else{
                    fs.readFile(__dirname + '/data/2.json', (err, data) => {
                        res.end(data)
                    })
                }
                
            });
            return;
            break;
        default:
            break;
    }
}).listen(8181,(a,b,c,d) => {
    console.log("接口跑在8181端口")
})