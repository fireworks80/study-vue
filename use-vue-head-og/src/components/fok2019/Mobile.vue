<template>
  <div class="wrap">
    2019 - mobile
    <img :src="createImg()" alt="" />
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
</style>
