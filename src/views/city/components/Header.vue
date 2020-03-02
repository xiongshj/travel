<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="less">
.header {
  overflow: hidden;
  position: relative;
  height: @header-height;
  font-size: 0.32rem;
  line-height: @header-height;
  text-align: center;
  color: @white-color;
  background: @theme-color;
  .header-back {
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
