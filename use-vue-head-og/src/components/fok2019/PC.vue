<template>
  <p>2019 pc</p>
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
