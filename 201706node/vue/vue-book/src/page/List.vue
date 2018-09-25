<template>
    <div class="list">
        <MHeader title="列表页"></MHeader>
        <div class="scroll">
          <Loading v-if="isLoading"></Loading>
          <ul>
            <router-link tag="li" :to="{name:'detail',params:{bid:book.id}}" v-for="book in books">
              <img v-lazy="book.bookCover" alt="">
              <div>
                <h4>{{book.bookName}}</h4>
                <p>{{book.bookInfo}}</p>
                <strong>{{book.bookPrice | currency}}</strong>
                <button class="btn btn-danger" @click.prevent="remove(book.id)">删除</button>
              </div>
            </router-link>
          </ul>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Loading from '../base/Loading.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                books:[],
                isLoading:true
            }
        },
        created(){
            this.getList();
        },
        components:{MHeader,Loading},
        methods: {
            remove(id){
              axios.delete(`/api/book?id=${id}`).then(res=>{
                  //也可以在调用下getList方法，但是会导致两次请求
                this.books = this.books.filter(book=>book.id!==id);
              });
            },
            getList(){
              axios.get('/api/book').then(res=>{
                  this.books = res.data; this.isLoading = false;
              });
            }
        },
        activated(){ //当你使用keep-alive 切换路由时依然会走这个函数
          this.getList(); //不缓存的内容可以在这里重新获取
        },
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped lang="stylus">
  .list
    height 100%
    ul
      padding 1.5%
      li
        display flex
        margin 2% 0
        img
          width 150px
          height 150px
        div
          width 200px;
          font-size 18px;
          justify-content center
          display flex
          flex-direction column
          button
            width 80px;
</style>

