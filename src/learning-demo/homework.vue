<template>
  <div class="page">
    <div class="label">投保单号码</div>
    <div class="control">001212121262065</div>
    <div class="label">销售方式</div>
    <div class="control">团体直销</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'hello',
    }
  },
}
</script>
<style lang="less" scoped>
.page {
  font-size: 12px;
  .label {
    width: 200px;
    height: 30px;
    line-height: 30px;
    color: #000000a6;
    text-align: right;
  }
  .control {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    height: 28px;
    line-height: 30px;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
