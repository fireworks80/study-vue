<template>
  <div id="app">
    <p class="desc">pc 페이지 입니다.1</p>
    <img :src="createImage()" alt="">
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    createImage () {
      return require('@/assets/pc/images.png')
    }
  }
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

.desc {
  // @include a11y;
}
</style>
