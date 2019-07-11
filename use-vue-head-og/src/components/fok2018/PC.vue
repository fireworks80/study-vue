<template>
  <p>pc</p>
</template>
<script>
export default {
  metaInfo: {
    title: 'Vue meta pc',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        property: 'og:title',
        content: 'The new arteon',
        vmid: 'og:title'
      },
      {
        property: 'og:type',
        content: 'website',
        vmid: 'og:type'
      },
      {
        property: 'og:url',
        content: 'https://arteon.vwkr.co.kr',
        vmid: 'og:url'
      },
      {
        property: 'og:description',
        content: '차, 그 이상의 아름다움',
        vmid: 'og:description'
      },
      {
        property: 'og:image',
        content: 'https://s3.ap-northeast-2.amazonaws.com/vwkr-arteon/static/launching/images/sharing/sharing_600x315_VW.jpg',
        vmid: 'og:image'
      }
    ]
  }
}
</script>
