<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for="item of page" class="icon" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="less">
/deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icons {
  margin-top: 0.1rem;
  .icon {
    float: left;
    overflow: hidden;
    position: relative;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      left: 0;
      padding: 0.1rem;
      box-sizing: border-box;
      .icon-img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: @dark-text-color;
      .ellipsis();
    }
  }
}
</style>
