<template>
  <div ref="wrapper" class="list">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div v-for="item of hot" class="button-wrapper" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div v-for="(item, key) of cities" class="area" :key="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            v-for="innerItem of item"
            class="item border-bottom"
            :key="innerItem.id"
          >{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="less">
/* 控制1像素边框的颜色 */
.border-topbottom {
  &:before {
    border-color: #ccc;
  }
  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  .title {
    padding-left: 0.2rem;
    font-size: 0.26rem;
    line-height: 0.54rem;
    color: #666;
    background: #eee;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        text-align: center;
      }
    }
  }

  .item-list {
    .item {
      padding-left: 0.2rem;
      line-height: 0.76rem;
    }
  }
}
</style>
