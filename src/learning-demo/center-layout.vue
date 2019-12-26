<template>
  <div>
    <div class="container flex">
      <div class="item"></div>
    </div>
    <div class="container">
      <div class="item margin"></div>
    </div>
    <div class="container relative">
      <div class="item absolute"></div>
    </div>
    <div class="container relative">
      <div class="item absolute2"></div>
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
@import './global';
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.margin {
  //   margin: calc(50% - 10px) auto;
  margin: 50% auto;
  transform: translateY(-50%);
}
.relative {
  position: relative;
  .absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .absolute2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
