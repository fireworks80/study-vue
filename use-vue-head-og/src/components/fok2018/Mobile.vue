<template>
  <div class="wrap">
    <img :src="createImg()" alt="">
  </div>
</template>
<script>
import { og2018 } from '@/ogInfo/og.js'
import { setMetaTags } from '@/util/setMetaTags.js'
export default {

  metaInfo: {
    title: 'Vue meta mobile',
    meta: setMetaTags(og2018)
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
</style>
