<script src="../main.js"></script>
<template>
    <div class="home">
        <MHeader title="首页"></MHeader>
        <div class="scroll">
          <Swiper :data="sliders"></Swiper>
          <h3>热门图书</h3>
          <Loading v-if="isLoading"></Loading>
          <ul class="hot-list">
            <li v-for="book in books">
              <img :src="book.bookCover" alt="">
              <span>{{book.bookName}}</span>
              <b>{{book.bookPrice | currency}}</b>
            </li>
          </ul>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    import axios from 'axios';
    import Loading from '../base/Loading.vue';
    export default {
        data(){
            return {
                sliders:[], //用来接收轮播图的
                books:[],//获取热门图书
                isLoading:true
            }
        },
        activated(){
          this.getHot();
        },
        created(){
            this.getSliders();
            this.getHot();
        },
        components:{MHeader,Swiper,Loading},
        methods: {
            getSliders(){ //跨域 cors jsonp fetch 支持跨域
              axios.get('/api/sliders').then(res=>{
                  this.sliders = res.data;
              });
            },
            getHot(){ //获取的数据有可能就是空数组，此时也获取完毕
                axios.get('/api/hot').then(res=>{
                    setTimeout(()=>{
                      this.books = res.data;
                      this.isLoading = false;//加载完毕
                    },1000)
                });
            }
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="stylus">
  .home
    height 100%
  h3
    padding-left 2%
    line-height 35px
    font-weight normal
  .hot-list
    display flex
    flex-wrap wrap
    li
      width 50%
      flex-direction column
      display flex;
      align-items  center
      img
        width 150px;
        height 150px;
</style>

