<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-show="keyword" ref="search" class="search-content">
      <ul>
        <li v-for="item of list" class="search-item border-bottom" :key="item.id">{{ item.name }}</li>
        <li v-show="isListEmpty" class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    isListEmpty() {
      return !this.list.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style scoped lang="less">
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: @theme-color;
  .search-input {
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    border-radius: 0.06rem;
    line-height: 0.62rem;
    text-align: center;
    color: #666;
  }
}

.search-content {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: #eee;
  .search-item {
    padding-left: 0.2rem;
    line-height: 0.62rem;
    color: #666;
    background: @white-color;
  }
}
</style>
