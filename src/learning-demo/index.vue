<template>
  <div>
    <router-link to="/learning/transform"
      >transform, transiton, animation</router-link
    >
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
.view {
  margin-top: 50px;
}
</style>
