<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ doubleCity }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  line-height: @header-height;
  color: @white-color;
  background: @theme-color;
  .header-left {
    float: left;
    width: 0.64rem;
    .back-icon {
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    border-radius: 0.1rem;
    color: #ccc;
    background: @white-color;
  }
  .header-right {
    float: right;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    text-align: center;
    color: @white-color;
    .arrow-icon {
      margin-left: -0.04rem;
      font-size: 0.24rem;
    }
  }
}
</style>
