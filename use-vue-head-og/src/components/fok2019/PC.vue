<template>
  <p>2019 pc</p>
</template>
<script>
import { og2019 } from '@/ogInfo/og.js'
import { setMetaInfo } from '@/util/setMetaInfo.js'
export default {
  metaInfo: {
    title: '2019 Vue meta pc',
    meta: setMetaInfo(og2019)
  }
}
</script>
