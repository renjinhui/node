let str = require('jw-super-handsome');
//引入时会先看 有没有./ ../如果没有 要不就是内置的如果没有 就是第三方，会去当前目录下的node_modules文件下查找，找到名字相同的进入package.json找到main对应的文件将其执行，如果当前目录找不到会去上级，找到根路径为止，如果一直找不到则报错 根据的路径时module.paths
console.log(str);
