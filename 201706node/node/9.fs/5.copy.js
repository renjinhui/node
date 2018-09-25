//拷贝功能
let fs = require('fs');
function copySync(source,target) {
    // readFileSync+writeFileSync
    let result = fs.readFileSync(source);
    fs.writeFileSync(target,result);
}
function copy(source,target,callback) {
    //readFile + writeFile
    fs.readFile(source,function (err,data) {
        if(err) return callback(err); //如果有错调用声明好的函数
        fs.writeFile(target,data,callback);//如果写完了调用callback
    });
}
copy('1.jpg','3.jpg',function (err) {
    if(err) return console.log(err);
    console.log('拷贝成功');
});

