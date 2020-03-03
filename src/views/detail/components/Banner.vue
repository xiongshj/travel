<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_600x330_acaaf06b.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">流溪河国家森林公园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span> 8
        </div>
      </div>
    </div>
    <gallery v-show="showGallery" :images="images" @close="handleGalleryClose"></gallery>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    Gallery
  },
  data() {
    return {
      showGallery: false,
      images: [
        'http://img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_r_800x800_3e120f4a.jpg',
        'http://img1.qunarzz.com/sight/p0/1508/7c/fed4e3fbb02d42ae058d0543ab4d2cd4.water.jpg_r_800x800_1b948913.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true
    },
    handleGalleryClose() {
      this.showGallery = false
    }
  }
}
</script>

<style scoped lang="less">
.banner {
  /* 下面三行代码防止页面抖动，即网速慢的情况下加载图片前后页面效果不一 */
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 0.6rem;
    color: @white-color;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      padding: 0 0.2rem;
      font-size: 0.32rem;
    }
    .banner-number {
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      line-height: 0.32rem;
      background: rgba(0, 0, 0, 0.5);
      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
