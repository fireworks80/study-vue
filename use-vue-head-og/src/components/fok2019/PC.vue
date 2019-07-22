<template>
  <div>
    <h2>2019 go hash</h2>
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
    title: 'Vue meta pc',
    meta: setMetaTags(og2019)
  }
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
