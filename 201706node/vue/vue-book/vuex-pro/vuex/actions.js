//一般情况下action和mutation名字相同

import * as Types from './mutation-types';


const actions = {
  [Types.INCREMENT]({commit},num){
    setTimeout(()=>{
      commit(Types.INCREMENT,num); //提交到mutation中
    },1000)
  }
};
export default actions;
