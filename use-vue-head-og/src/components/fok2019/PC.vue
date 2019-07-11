<template>
  <p>2019 pc</p>
</template>
<script>
import { og2019 } from '@/ogInfo/og.js'
import { getOgData } from '@/util/getOgData.js'
export default {
  metaInfo: {
    title: 'Vue meta pc',
    meta: getOgData(og2019)
  }
}
</script>
