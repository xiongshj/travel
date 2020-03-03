<template>
  <div>
    <div v-for="(item, index) of list" class="item" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="less">
.item-title {
  padding: 0 0.2rem;
  font-size: 0.32rem;
  line-height: 0.8rem;
  .item-title-icon {
    display: inline-block;
    position: relative;
    top: 0.06rem;
    left: 0.06rem;
    width: 0.36rem;
    height: 0.36rem;
    margin-right: 0.1rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    background-size: 0.4rem 3rem;
  }
}

.item-children {
  padding: 0 0.2rem;
}
</style>
