import Vue from 'vue';
import App from './App';
import router from './router';
/*import test from './test'
Vue.use(test);*/
Vue.config.productionTip = false;
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
//导入swiper的样式
import 'swiper/dist/css/swiper.min.css';

//全局过滤器
Vue.filter('currency',function (input) { //input代表的是管道符前面的值
    return '$'+parseFloat(input).toFixed(2);
});
import VueLazyload from 'vue-lazyload' //导入懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://cdn.uehtml.com/201402/1392662524764_1140x0.gif',
  attempt: 1
});
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
