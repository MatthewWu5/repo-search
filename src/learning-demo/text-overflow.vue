<template>
  <div>
    <div class="container singleline" :title="text">
      {{ text }}
    </div>

    <div class="container multiline" :title="text">
      {{ text }}
    </div>

    <div class="container scroll" :title="text">
      {{ text }}
    </div>
    <div class="container scrollX" :title="text">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text:
        '有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字有很多很多文字',
    }
  },
}
</script>
<style lang="less" scoped>
@import './global';
.singleline {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.multiline {
  height: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.scroll {
  height: 100px;
  overflow: auto;
}
.scrollX {
  white-space: nowrap;
  overflow: auto;
}
</style>
