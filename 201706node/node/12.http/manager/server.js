let http = require('http');
let fs = require('fs');
let mime = require('mime');
let url = require('url');
let userList = [{id:1,username:'zfpx',password:'admin'}];
let listener = (req,res) =>{
    let {query,pathname} = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('index.html').pipe(res);
    }else if(pathname === '/user'){ //对用户的增删改查
        // req.method是请求的方法 取出来的是大写的 GET POST DELETE PUT
        res.setHeader('Content-Type','application/json;charset=utf-8');
        switch (req.method){  // /user?id=1
            case 'GET': //正规restful风格 查询全部返回数组，查询一个返回对象
                if(query.id){ //查询一个

                }else{ //查询所有
                    res.end(JSON.stringify(userList));
                }
                break;
            case 'POST'://返回增加的那一项
                let str = '';
                req.on('data',function (chunk) { //获取请求体的数据
                    str+=chunk;
                });
                req.on('end',function () {
                   let user = JSON.parse(str);
                   user.id = userList.length>0?userList[userList.length-1].id+1:1; //如果没有数据需要加一个id 有数据则取最后一项id+1
                   userList.push(user);
                   res.end(JSON.stringify(userList));
                });
                break;
            case 'PUT'://返回修改后的那一项
                break;
            case 'DELETE':// 返回空对象
                break;
        }
    }
    else {
        if(fs.existsSync(`.${pathname}`)){
            res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream(`.${pathname}`).pipe(res);
        }else{
            res.statusCode = 404;
            res.end();
        }
    }
};
let port = 8080;
let server = http.createServer(listener);
server.listen(port,function () {
    console.log(`start ${port}`);
});