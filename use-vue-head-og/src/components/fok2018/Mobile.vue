<template>
  <div class="wrap">
    <img :src="createImg()" alt="" />
  </div>
</template>
<script>
import fok2018Meta from '@/js/meta/fok2018.json'
import { getViewport } from '@/util/getViewport.js'
export default {
  metaInfo: getViewport(fok2018Meta),
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
