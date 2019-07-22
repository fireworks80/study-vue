<template>
  <div>
    <h2>2019 go hash</h2>
    <section id="top">top</section>
    <section id="mid">mid</section>
    <section id="btm">btm</section>
  </div>
</template>
<script>
import fok2019Meta from '@/js/meta/fok2019.json'
import { getViewport } from '@/util/getViewport.js'
export default {
  metaInfo: getViewport(fok2019Meta)
}
</script>
<style lang="scss" scoped>
  section {
    height: 100vh;

    @for $i from 1 to 4 {
      &:nth-of-type(#{$i}) {
        background: rgba(random(255), random(255), random(255), .5);
      }
    }
  }
</style>
