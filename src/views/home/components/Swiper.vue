<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/64d0b9e87e685d864add20d75c81bcc9.jpg_750x200_7a0937d7.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .swiper-pagination-bullet-active {
  background: #fff;
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
