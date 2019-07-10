<template>
  <div class="img-wrap">
    <img :src="createImage()" alt="">
  </div>
</template>
<script>
export default {
  name: 'MobileComp',
  methods: {
    createImage () {
      return require('@/assets/m/images.png')
    }
  }
}
</script>
<style lang="scss" scoped>
$color: red;

.img-wrap {
  background-color: $color;
}
</style>
