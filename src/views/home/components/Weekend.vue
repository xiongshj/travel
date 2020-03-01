<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of list" class="item border-bottom" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="less">
.title {
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background: #eee;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 37.09%;
  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;
  .item-title {
    font-size: 0.32rem;
    line-height: 0.54rem;
    .ellipsis();
  }
  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    .ellipsis();
  }
}
</style>
