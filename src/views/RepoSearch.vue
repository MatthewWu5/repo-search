<template>
  <div class="about">
    <h1>This is an search repo page</h1>
    <input v-model="repoInput" />
    <button @click="onSearch">Search</button>
    <div>
      <span>总数{{ totalCount }}</span>
      <div v-show="loading">loading...</div>
    </div>

    <div v-for="(item, index) in items" :key="index" class="item">
      {{ item.name }}
      {{ item.forks_count }}
      <a :href="item.html_url" target="blank">{{ item.name }}主页</a>
      <img :src="item.owner.avatar_url" class="img" />
    </div>
  </div>
</template>
<script>
import { getRepos, getOwner } from '../api/repo'
export default {
  data() {
    return {
      totalCount: 0,
      repoInput: 'react',
      items: [],
      loading: false,
    }
  },
  methods: {
    onSearch() {
      this.loading = true
      getRepos(this.repoInput).then(res => {
        console.log(res)
        this.totalCount = res.total_count
        this.items = res.items
        this.loading = false
      })
    },
  },
  mounted() {
    console.log('on mounted')
    this.onSearch()
  },
}
</script>
<style lang="less">
.item {
  height: 60px;
  color: grey;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  width: 1000px;
  margin: auto;

  .img {
    width: 50px;
    height: 50px;
  }
}
</style>
