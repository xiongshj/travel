<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImages="galleryImages"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      lastId: '',
      sightName: '',
      bannerImg: '',
      galleryImages: [],
      list: []
    }
  },
  mounted() {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  // 下面的代码解决使用 keep-alive 组件后进入新的 detail 页不重新发起请求的问题
  activated() {
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json', { params: { id: this.$route.params.id } })
        .then(this.handleGetDetailSucc)
    },
    handleGetDetailSucc(res) {
      res = res.data
      if ((res.ret = res.data)) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.galleryImages = data.galleryImages
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style scoped lang="less">
.content {
  height: 50rem;
}
</style>
