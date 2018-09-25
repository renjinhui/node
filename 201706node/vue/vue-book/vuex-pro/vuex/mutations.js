import * as Types from './mutation-types';

const mutations = {
  [Types.INCREMENT](state,num){
    state.number+=num;
  },
  [Types.DECREMENT](state,num){
    state.number-=num;
  }
};
export default mutations;

