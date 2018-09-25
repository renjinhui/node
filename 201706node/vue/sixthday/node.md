## webpack
- 是一个打包工具,将所有的文件打包成一个

## 使用webpack
- 安装,如果安装全局可能会导致版本的差异,都安装到项目开发依赖中,可以使每个人的版本同一
```
npm install webpack --save-dev
```
- 在package.json中配置脚本
```
scripts:{
    "build":"webpack"
}
```
## 解析es6语法
- babel-core是babel的核心包,使用babel必须安装
- babel-loader 是babel的翻译官,用来翻译语法的,但是他不懂
- 配置预设让他懂es6 babel-preset-es2015
```
npm install babel-core babel-loader babel-preset-es2015 --save-dev
```

## 解析es7语法
- es2015 stage-3 stage-2 stage-1 stage-0(es7语法)
```
npm install babel-preset-stage-0 --save-dev
```

## 解析css 将css看成一个模块
```
npm install css-loader style-loader --save-dev
```

## 解析less
```
npm install less less-loader --save-dev
```

## 解析图片
- 如果使用js引入图片默认不会进行打包文件,如果是背景图片他会去打包
```
npm install file-loader url-loader --save-dev
```

> 在js中引用图片 需要使用import导入文件

## 打包html以src下的html作为模板将打包后的文件引入
```
npm install html-webpack-plugin --save-dev
```


## npm run build
- 会执行输出实体文件 速度会很慢 (上线时使用run build)

## npm run dev
- 一般我们会在本地跑一个服务,当文件变化,刷新浏览器
```
npm install webpack-dev-server --save-dev
```


## 基础webpack用法
```
npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 css-loader style-loader less-loader sass-loader less file-loader url-loader html-webpack-plugin webpack-dev-server --save-dev
```

> .vue文件需要基于webpack构建的,vue-cli 脚手架

## vue-cli用法
- 安装vue-cli 命令行工具,安装后命令行中会多一个vue的命令
```
npm install vue-cli -g
```

```
vue init 模板名 项目名
cd 项目中
npm install
npm run dev
```

## 更改项目端口号
```
config/index.js
```


