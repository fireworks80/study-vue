<template>
  <p>pc</p>
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
  metaInfo: setMetaInfo(fok2018Meta)
}
</script>

