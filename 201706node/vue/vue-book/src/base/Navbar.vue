<template>
  <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiaoyetuanqi"></i>
      <span>列表页</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjiayemian"></i>
      <span>添加页</span>
    </router-link>
  </nav>
</template>
<script>
    export default {
        data(){
            return {}
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<!--
  display:flex;
  flex-direction:column;
  flex:1
  justify-content:center;
  align-items:center
-->
<style scoped lang="stylus">
  nav
    position fixed
    bottom 0
    left 0
    width 100%
    height 60px
    display flex
    border-top 1px solid #cacaca
    a
      flex 1
      display flex
      flex-direction column
      align-items center
      justify-content center
    .router-link-active
      color #2aabd2

</style>

