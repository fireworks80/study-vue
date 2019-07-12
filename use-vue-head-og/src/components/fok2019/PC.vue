<template>
  <p>2019 pc</p>
</template>
<script>
import fok2019Meta from '@/js/meta/fok2019.json'
import { getViewport } from '@/util/getViewport.js'
export default {
  metaInfo: getViewport(fok2019Meta)
}
</script>
