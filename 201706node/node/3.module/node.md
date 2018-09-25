## 内置模块
## 第三方模块
- 需要下载 npm node pacage manager
- 在以前前台模块可能会使用bower,现在不用了，基本都在使用npm来管理我们的模块

### 全局使用安装要增加 -g (mac需要加sudo)(可以在任何目录下安装使用)
- 不是所有模块都能加-g参数，加了-g表示当前模块只能在命令行里使用
- nrm 管理下载从哪里下载，切换到国内源（淘宝源，cnpm 每10分钟更新一次）
```
npm install nrm -g
nrm ls 展示所有可用的源
nrm use taobao
```

> 一般下载时使用cnpm / taobao

## 本地安装(在项目中使用)
- 初始化一个依赖文件，用来记录安装内容和版本号
```
npm init
```
### 项目依赖(开发上线都需要)
```
npm install jw-super-handsome --save
npm uninstall jw-super-handsome --save
```
### 开发依赖(在开发时使用)
```
npm install less@1.7.3 --save-dev
npm uninstall less --save-dev
```

> 默认下载到node_modules文件夹下

## 安装依赖
- 会将package.json中的依赖全部安装
```
npm install
```

## yarn
```
npm install yarn -g
yarn init -y
yarn add jquery 默认项目依赖
yarn add less --dev
yarn remove jquery
yarn install
```


## 发布包
```
nrm use npm 切换到官方源
npm addUser 可以添加账号有则表示登陆
npm publish 发布
```

> 可以将写好的模块发布到npm官网上

## 核心模块 用法第三方模块一致（不需要安装node自带）
- http fs url util path
```
path.resolve();
path.join();
```

## util核心模块
- 用来实现js中的继承



> 解决路径需要是绝对路径的问题

