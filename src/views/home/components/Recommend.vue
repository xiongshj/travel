<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li v-for="item of recommendList" class="item border-bottom" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1603/50/50309ba1d90e4e3290.water.jpg_200x200_41a17778.jpg',
          title:
            '流溪河国家森林公园流溪河国家森林公园流溪河国家森林公园流溪河国家森林公园',
          desc:
            '穗北之肺，避暑圣地流溪河国家森林公园流溪河国家森林公园流溪河国家森林公园'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1509/80/9535a0d28468b3c6c910d87f1a4fdbe8.water.jpg_200x200_ea09ee17.jpg',
          title:
            '岭南印象园',
          desc:
            '广州本月收藏Top5╰(￣▽￣)╭'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1603/73/733cf0d5d014248e90.water.jpg_200x200_f09c1393.jpg',
          title:
            '中山纪念堂',
          desc:
            '见证旧中国历史烟云'
        }
      ]
    }
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
      color: #fff;
      background: #ff9300;
    }
  }
}
</style>
