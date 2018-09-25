<template>
  <div class="add">
    <MHeader title="修改图书" :back="true"></MHeader>
    <div class="scroll">
      <form>
        <div class="form-group">
          <label for="bookName" class="control-label">图片名称</label>
          <input type="text" class="form-control" id="bookName" v-model="book.bookName">
        </div>
        <div class="form-group">
          <label for="bookCover" class="control-label">图片地址</label>
          <input type="text" class="form-control" id="bookCover" v-model="book.bookCover">
        </div>
        <div class="form-group">
          <label for="bookPrice" class="control-label">图书价格</label>
          <input type="text" class="form-control" id="bookPrice" v-model="book.bookPrice">
        </div>
        <div class="form-group">
          <label for="bookInfo" class="control-label">图书信息</label>
          <input type="text" class="form-control" id="bookInfo" v-model="book.bookInfo">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-info" @click="update">确认修改</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import axios from 'axios';
  export default {
    data(){
      return {
        book:{
          bookName:'',
          bookPrice:'',
          bookCover:'',
          bookInfo:''
        }
      }
    },
    watch:{
      $route(){ //监控路径变化，可以进行一些数据获取
          this.getBook();
      }
    },
    created(){
      this.getBook(); //页面加载时获取数据
    },
    methods: {
      update(){ //getOne传路径id +post传请求体
          axios.put(`/api/book?id=${this.$route.params.bid}`,this.book).then(res=>{
              this.$router.push('/list');
          });
      },
      getBook(){
          axios.get(`/api/book?id=${this.$route.params.bid}`).then(res=>{
              this.book=res.data;
          });
      }
    },
    components:{MHeader},
    computed: {},
    mounted(){
    }
  }
</script>
<style scoped>
  .add{height:100%}
  .scroll{
    width: 80%;
    margin:4% 10% 10% 10%;
  }

</style>

