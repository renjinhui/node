let http = require('http');
let fs = require('fs');
let mime = {
    '.js':'application/javascript',
    '.css':'text/css'
};
let listener = (req,res) =>{
    console.log(req.url);
    // 每个文件都要写一条判断 代码量重复
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }
    else {// req.url = /index.css  text/css
          // req.url = /index.min.js   application/javascript
        if(fs.existsSync(`.${req.url}`)){ //如果存在我就去读这个文件
            res.setHeader('Content-Type',mime[req.url.match(/\.\w+$/)[0]]+';charset=utf8');
            fs.createReadStream(`.${req.url}`).pipe(res);
        }else{
            res.statusCode = 404;
            res.end();
        }
    }
    /*else if(req.url === '/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8');
        fs.createReadStream('./index.css').pipe(res);
    }else if(req.url === '/index.js'){
        res.setHeader('Content-Type','application/javascript;charset=utf-8');
        fs.createReadStream('index.js').pipe(res);
    }*/


};
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});