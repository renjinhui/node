import Vue from 'vue';
import App from './App.vue';


// 1.导入vuex
import Vuex from 'vuex';
// 2.使用Vuex插件
Vue.use(Vuex);
// 4.状态
let state = {number:1};
// 5.mutation
let mutations = {
  add(state,num){ //第一个参数就是当前容器的状态
      state.number+=num;
  },
  minus(state,num){
    state.number-=num;
  }
};
//7.actions处理异步
let actions = {
  add({commit},num){
    setTimeout(()=>{
      commit('add',num)
    },3000)
  }
};
//6.getters计算
let getters = {
  val(state){return state.number%2?'奇数':'偶数'}
};
// 3.声明容器将状态放到容器内
let store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
new Vue({
  el:'#app',
  render:h=>h(App),
  store //容器放到组件的实例上
  //每个实例上都会有$store的属性
});
