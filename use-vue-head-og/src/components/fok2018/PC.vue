<template>
  <div>
    <p>pc</p>
    <section id="section1"></section>
    <section id="section2"></section>
    <section id="section3"></section>
  </div>
</template>

<style lang="scss">
section {
  width: 100%;
  height: 1000px;
  &#section1 {
    background: blue;
  }
  &#section2 {
    background: blueviolet;
  }
  &#section3 {
    background: red;
  }
}
</style>

<script>
import fok2018Meta from '@/js/meta/fok2018.json'
import { getViewport } from '@/util/getViewport.js'

export default {
  metaInfo: getViewport(fok2018Meta)
}
</script>

