<template>
  <div class="wrapper">
    <swiper v-if="showSwiper" :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000, // 自动切换的时间间隔
        autoplayDisableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .swiper-pagination-bullet-active {
  background: @white-color;
}
.wrapper {
  // 以下两种方式设置图片宽高比自适应
  width: 100%;
  height: 26.67vw;
  background: #eee;
  // overflow: hidden;
  // width: 100%;
  // height: 0;
  // padding-bottom: 26.67%;
  // background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
