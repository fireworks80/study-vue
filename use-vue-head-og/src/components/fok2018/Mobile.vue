<template>
  <div class="wrap">
    <img :src="createImg()" alt="" />
  </div>
</template>
<script>
import { og2018 } from '@/ogInfo/og.js'
import fok2018Meta from '@/js/meta/fok2018.json'
import { setMetaInfo } from '@/util/setMetaInfo.js'
export default {
  // metaInfo: {
  //   title: '2019 Vue meta pc',
  //   meta: setMetaInfo(og2019)
  // }
  metaInfo: setMetaInfo(fok2018Meta),
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
