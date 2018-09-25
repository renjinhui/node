//入口文件
import Vue from 'vue';
import App from './App.vue'
import store from './vuex'
new Vue({
  el:'#app',
  render:h=>h(App),
  store //this.$store.state.number
});
