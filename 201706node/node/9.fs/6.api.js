//readFile writeFile mkdir fs.stat文件状态 rmdir unlink exists
let fs = require('fs');
/*if(fs.existsSync('./b')){ //判断文件是否存在
    fs.stat('./b',function (err,stat) {
        //stat中的time 是用来做服务的缓存
        //stat.isDirectory 是不是文件夹  stat.isFile 是不是文件
        if(stat.isDirectory()){
            fs.rmdir('./b',function () {}) //删除目录
        }else{
            fs.unlink('./b',function () {}) //删除文件
        }
    });
}*/
function md(url) {
    let paths = url.split('/');
    let index = 0;
    function make(path) {
        if(index === paths.length+1) return; //如果到终点了 停止循环
        if(!fs.existsSync(path)){ //不存在
            fs.mkdir(path,function () { //不存在创建当前的，创建成功后，创建下一个
                make(paths.slice(0,++index).join('/'));
            });
        }else{ //存在，继续下一次
            make(paths.slice(0,++index).join('/'));
        }
    }
    make(paths[index++]);//先取出第一个
}
md('a/b/c/d');