<template>
  <div>
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div v-show="!showAbs" class="header-fixed" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 46) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style scoped lang="less">
.header-abs {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 0.4rem;
  line-height: 0.72rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  .header-abs-back {
    font-size: 0.36rem;
    color: @white-color;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  height: @header-height;
  font-size: 0.32rem;
  line-height: @header-height;
  text-align: center;
  color: @white-color;
  background: @theme-color;
  .header-fixed-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    color: @white-color;
  }
}
</style>
