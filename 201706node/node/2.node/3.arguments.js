//console.log(arguments);
//在文件中运行this ={} 默认给你套了一层函数 形参可以直接访问
// 0：exports 导出 1：require 需要 2:module 模块 3.__filename 4.__dirname
console.log(exports);
console.log(__filename);//当前文件所在的绝对路径；
console.log(__dirname);//当前文件所在的目录名；
//这五个参数也叫全局对象，也可以直接访问，不需要声明直接使用

// 模块化 私有化 避免命名冲突，代码冲突，提高代码质量，增加可维护性，高内聚低耦合
// seajs (依赖就近) CMD requirejs (依赖前置)模块化 AMD
// node天生自带 commonjs规范
// 定义了如何导出模块 如何使用模块，如何定义一个模块
//闭包 可以实现模块化 常用形式
//单例模式 var obj32543675 = {} 名字可能依然会用冲突,导致调用的时候前缀过长