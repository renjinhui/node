<template>
  <div>
    Hello {{msg}}
    <router-link to="/a">A</router-link>
    <router-link to="/b">B</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {msg: 'world'}
    },
    created () {
    },
    methods: {},
    computed: {},
    mounted () {
    }
  }
</script>
<style scoped>
</style>

