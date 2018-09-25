<template>
    <div class="m-header">
        {{title}}
        <i v-if="back" class="iconfont icon-fanhui" @click="goBack()"></i>
    </div>
</template>
<script>
    export default {
        props:{
            title:{},
            back:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {}
        },
        created(){
        },
        methods: {
          goBack(){
              this.$router.history.go(-1);
          }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  .m-header{
    background: #2aabd2;
    color: #fff;
    text-align: center;
    height: 44px;
    line-height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .m-header i{
    position: absolute;
    left: 10px;
    top:0
  }
</style>

