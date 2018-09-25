// 导入vuejs
import Vue from 'vue';
// 每一个组件都是.vue文件
import App from './App.vue';
console.log(App);
import router from './router'; // 文件名叫index.js则可以省略
// runtime 中 不识别template
// runtime 只支持render方法
new Vue({
  el: '#app',
  // 1.template: '<App/>',
  // 1.components: {App},
  // 2.render: h => h(App),
  ...App,
  router // 注册路由
});
