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
import { og2019 } from '@/ogInfo/og.js'
import { setMetaTags } from '@/util/setMetaTags.js'
export default {
  metaInfo: {
    title: 'Vue meta mobile',
    meta: setMetaTags(og2019)
  },
  methods: {
    createImg () {
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
