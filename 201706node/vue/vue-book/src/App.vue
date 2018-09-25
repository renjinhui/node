<template>
  <div id="app">
    <transition name="slide">
      <keep-alive>
        <!--keep-alive可以解决缓存问题，不会在调用created方法-->
        <router-view style="position: absolute;width: 100%;top: 0;left: 0"></router-view>
      </keep-alive>
    </transition>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './base/Navbar.vue'
export default {
  name: 'app',
  components:{
      Navbar
  }
}
</script>
<style lang="stylus">
  #app
    width 100%
    height 100%
  .slide-enter{
    transform translateX(100%);
  }
  .slide-enter-active{
    transition all 0.4s
  }
  .slide-leave-active{
    opacity 0
    transition all 0.3s
  }
  *
    margin 0
    padding 0
    font-size 16px;
    body,html,#app
      width 100%
      height 100%
      overflow hidden
  ul,li
    list-style none
  a
    text-decoration none
    color #ccc
  .scroll
    position fixed
    top 44px
    bottom 60px
    overflow-x hidden
    overflow-y scroll
    width 100%
</style>
