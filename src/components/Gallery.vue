<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in images" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: #000;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 66.375%;
    .gallery-img {
      width: 100%;
    }
    .swiper-pagination {
      bottom: -1rem;
      color: @white-color;
    }
  }
}
</style>
