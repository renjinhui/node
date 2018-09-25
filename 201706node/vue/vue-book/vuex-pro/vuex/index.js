import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions'
Vue.use(Vuex);
// 1. 声明状态
const state = {
  number:0
};
const getters = {
  getResult(state){return state.number%2?'奇数':'偶数'}
};
// 2. 声明容器
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict:true //严格模式，一切没有通过mutation更改状态都会报错
});
// 3.宏 让你写了哪些逻辑让别人看起来一目了然，可以有代码提示
