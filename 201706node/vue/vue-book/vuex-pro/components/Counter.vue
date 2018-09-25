<template>
    <div>
      <button @click="minus">-</button>
      <span>{{n}}</span>
      <button @click="add">+</button>
      {{$store.getters.getResult}}
      {{getResult}}
    </div>
</template>
<script>
  //辅助函数 是vuex里提供的
    import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
    console.log(111,mapMutations([Types.INCREMENT]));
    import * as Types from '../vuex/mutation-types'
    //mapState可以传递一个数组，数组中的内容名字要和state中相同，执行后返回一个对象，因为是属性需要放在computed中，并且将内容展开,传入对象可以改名
    export default {
        methods: { // ...{increment,decrement}
          ...mapMutations([Types.INCREMENT,Types.DECREMENT]),
          ...mapActions({AIncrement:Types.INCREMENT}),
          add(){
            this.AIncrement(3);
            // this.$store.dispatch(Types.INCREMENT,3);
            //this[Types.INCREMENT](2)
            //this.$store.commit(Types.INCREMENT)
          },
          minus(){
             this[Types.DECREMENT](1)
             //this.$store.commit(Types.DECREMENT)
          }
        },
        computed: {
          ...mapGetters(['getResult']),
          ...mapState({n:'number'})
        },
    }
</script>
<style scoped>
</style>

