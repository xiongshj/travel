<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="item of list" class="item border-bottom" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="less">
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;
  background: #eee;
}

.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    flex: 1;
    min-width: 0;
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
    .item-button {
      margin-top: 0.16rem;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      line-height: 0.44rem;
      color: @white-color;
      background: #ff9300;
    }
  }
}
</style>
