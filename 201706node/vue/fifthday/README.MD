## vue-router独立的包
- axios 也支持在服务端使用
```
npm install vue bootstrap vue-router axios  animate.css --save
```

## 路由(前端路由 后端路由) 通过不同的路径返回不同的结果
- 后端渲染，前后端分离，后端只提供接口，跳转逻辑由前端管理，速度会比以前快。
## spa
- 单页应用-> 无刷新(不会每次都重新加载) 切换的是页面中的组件，速度很快，首屏加载可能会导致速度变慢(首屏利用服务端渲染 | 路由切分) 缺点：seo优化不能解决
- 多页开发-> 体验效果，没有实现复用，每次都需要重新加载页面

> vue-router实现单页开发，不会刷新页面(hash(开发),h5api(上线 后台可以支持))

## 路由使用
- 一级路由的配置，实现简单的路由跳转
- 声明式导航 编程式导航($router,push go replace)
- 路径参数  $route.params (配置404,重定向，默认组件)
- 子路由 (children 路径不能带/)
- 实现路由获取数据(在组件中created,在beforeRouterEnter方法中获取) keep-alive可以缓存数据（让组件不销毁）
- 权限判断 router.beforeEach
- 实现动画效果
- 当路径参数变化可以在watch监控参数变化获取数据

## webpack+vue-cli(项目工程化)
