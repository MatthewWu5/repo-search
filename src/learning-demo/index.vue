<template>
  <div class="navigator">
    <div class="fixed">
      <router-link to="/learning/display-base">display base</router-link>
      <router-link to="/learning/display-table">display table</router-link>
      <router-link to="/learning/display-flex">display flex</router-link>
      <router-link to="/learning/float">float</router-link>
      <router-link to="/learning/text-overflow"
        >text-overflow, scroll</router-link
      >
      <router-link to="/learning/center-layout">center layout</router-link>
      <router-link to="/learning/transform"
        >transform, transiton, animation</router-link
      >
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.navigator {
  .fixed {
    position: fixed;
    right: 16px;
    top: 16px;
    a {
      display: block;
    }
  }
}
.view {
  margin: auto;
  width: 800px;
}
</style>
