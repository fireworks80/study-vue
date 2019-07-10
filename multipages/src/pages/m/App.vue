<template>
  <div id="app">
    <p>모바일 페이지 입니다.2</p>
    <MoComp></MoComp>
  </div>
</template>
<script>
import MoComp from '@/components/MobileComp'
export default {
  name: 'App',
  components: { MoComp }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
