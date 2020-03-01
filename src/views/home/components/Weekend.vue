<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of recommendList" class="item border-bottom" :key="item.id">
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
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '清远周边逛',
          desc:
            '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '浮在海上的绿洲',
          desc:
            '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title: '广州必打卡',
          desc: '感受现代与传统相融合的广州'
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

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
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
