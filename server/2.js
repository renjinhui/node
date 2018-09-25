let http = require('http');
let url = require('url');
let queryString = require('querystring');
let fs = require('fs');

http.createServer((req,res) => {
    let {pathname,query} = url.parse(req.url,true);
    res.statusCode = 200;
    res.setHeader('content-type','text/html;charset=utf-8')
    switch (pathname) {
        case '/favicon.ico':
            res.end();
            return;
            break;
        case '/':
            let file = fs.readFile('../index.html','utf-8',(err,data)=>{
                if(err){
                    res.end()
                }else{
                    res.end(data)
                }
            });
            return;
            break;
        case '/home':
            req.on('data',(data)=>{
                let obj = queryString.parse(data);
                if(obj.name == 'zf'){
                    fs.readFile(__dirname + '/data/1.json','utf-8',(err,data)=>{
                        res.end(data)
                    })
                }else{
                    fs.readFile(__dirname + '/data/2.json', 'utf-8', (err, data) => {
                        res.end(data)
                    })
                }
            });
            return;
            break;
        case '/add':
            let obj = {}; 
            req.on("data",(data)=>{
                obj = queryString.parse(data+'');
                console.log(obj);
            });
            req.on('end',()=>{
                fs.readFile(__dirname+'/data/2.json','utf-8',(err,data)=>{
                    let ary = JSON.parse(data);
                    ary.push(obj);
                    fs.writeFile(__dirname+'/data/2.json',JSON.stringify(ary),()=>{
                        res.end(JSON.stringify(ary))
                    })
                    
                })
            });
            return;
            break;    
        default:
            break;
    }
}).listen('8182',()=>{
    console.log("接口跑在8182")
})