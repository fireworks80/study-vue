<template>
  <div class="wrap">
    2019 - mobile

    <img :src="createImg()" alt="">
    <section id="top">top</section>
    <section id="mid">mid</section>
    <section id="btm">btm</section>

  </div>
</template>
<script>
import fok2019Meta from '@/js/meta/fok2019.json'
import { getViewport } from '@/util/getViewport.js'
export default {
  metaInfo: getViewport(fok2019Meta),
  methods: {
    createImg() {
      return require('@/assets/images/m/img.jpg')
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 720px;
  margin: 0 auto;
  background-color: red;
  font-size: 16px;
}

img {
  width: 100%;
}

section {
  height: 100vh;

  @for $i from 1 to 4 {
    &:nth-of-type(#{$i}) {
      background-color: rgba(random(255), random(255), random(255), .6);
    }
  }
}
</style>
