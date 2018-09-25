<template>
    <div class="swiper">
      <swiper :options="swiperOptions">
        <swiper-slide class="slider-item" v-for="(src,index) in data" :key="index">
          <img :src="src">
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
    export default {
        props:['data'],
        data(){
            return {
                swiperOptions:{
                    //设置父级的盒子的大小
                  setWrapperSize :true,
                  //监控父级大小变化
                  observeParents:true,
                }
            }
        },
        created(){
        },
        methods: {},
        computed: {},
        mounted(){
        }
    }
</script>
<style scoped>
  .slider-item img{width: 100%}
</style>

