# vue-book

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 页面级 containers page view
- 首页
- 列表页
- 详情页面
- 添加页面
## 页面的某一部分 组件components base
- 头部
- 底部导航
- 轮播图

## 安装插件
- elementUi mintUi
```
npm install axios bootstrap vuex --save
```


## 插件的用法
- 导出一个带有install方法的对象
```
export default {
  install(Vue) {
    Vue.component('my-button',{
      render:h=>h('button','嗲我啊')
    })
  }
}
```
- 可以在install方法中写一些全局的功能
- 可以写一些全局的方法，或者组件在任意组件中使用
- 通过use注册这个插件
```
import test from './test';
Vue.use(test);
```
- 此时my-button组件可以在任何组件中使用
```
<my-button></my-button>
```


## 使用stylus
```
npm install stylus stylus-loader --save-dev
```


