<template>
  <div class="wrap">
    2019 - mobile
    <img :src="createImg()" alt="">
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
</style>
