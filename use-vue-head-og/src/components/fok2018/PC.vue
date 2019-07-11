<template>
  <p>pc</p>
</template>
<script>
import { og2018 } from '@/ogInfo/og.js'
import { setMetaTags } from '@/util/setMetaTags.js'
export default {
  metaInfo: {
    title: 'Vue meta pc',
    meta: setMetaTags(og2018)
  }
}
</script>
