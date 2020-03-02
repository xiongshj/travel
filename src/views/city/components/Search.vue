<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
