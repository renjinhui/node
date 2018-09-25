import Vue from 'vue';
import Router from 'vue-router';
import A from '../containers/A.vue';
import B from '../containers/B.vue';
// 使用Router插件必须要use一下

Vue.use(Router); // 注册路由组件
let routes = [
  { path: '/a', component: A },
  { path: '/b', component: B }
];
let router = new Router({
  routes
});
export default router
