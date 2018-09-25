//导出时增加一个install方法
export default {
  //如果调用Vue.use这个对象会自动调用install方法
  install(Vue) { //Vue代表的时Vue的构造函数
    Vue.component('my-button',{
      render:h=>h('button','嗲我啊')
    })
  }
}
