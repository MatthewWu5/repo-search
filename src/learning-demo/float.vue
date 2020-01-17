<template>
  <div class="wrapper">
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
      >query media</a
    >
    <br />
    <br />
    float: left
    <div class="container">
      <div class="item float">1</div>
      <div class="item float">2</div>
      <div class="item float">3</div>
      <div class="item float">4</div>
      <div class="item float">5</div>
    </div>
    <br />
    float: right
    <div class="container">
      <div class="item float-right">1</div>
      <div class="item float-right">2</div>
      <div class="item float-right">3</div>
    </div>
    <br />
    文字折行
    <div class="container">
      <div class="item float-right"></div>
      这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字这里有很多文字
    </div>
    <br />
    设置百分比宽度 实现responsive, width:
    <input type="text" v-model="containerWidth" />
    <div
      class="container responsive-container"
      :style="{ width: containerWidth }"
    >
      <div class="item float responsive">1</div>
      <div class="item float responsive">2</div>
      <div class="item float responsive">3</div>
      <div class="item float responsive">4</div>
      <div class="item float responsive">5</div>
    </div>
    <br />
    BFC: block formatting context

    <br />
    高度塌陷 默认不会计算浮动元素的高度 而BFC规则会计算在内
    <!-- <div class="bfc"> -->
    <div>
      <div class="item float">1</div>
      <div class="item float">2</div>
      <div class="item float">3</div>
      <div class="item float">4</div>
    </div>
    <br />
    边距重叠 同一个BFC作用域下的元素会边距重叠 作用大的边距
    <!-- <div> -->
    <div class="item" style="margin-bottom:20px"></div>
    <!-- </div> -->
    <!-- <div class="bfc"> -->
    <div class="item" style="margin-top: 30px;"></div>
    <!-- </div> -->

    <br />
    <div>扩展</div>
    float with inline item
    <div class="container inline-block">
      <div class="item">item</div>
      <div class="item float">1</div>
    </div>
    float with inline item2
    <div class="container inline-block">
      <div class="item float">1</div>
      <div class="item">item</div>
    </div>
    float with block item
    <div class="container">
      <div class="item">item</div>
      <div class="item float-right">1</div>
      <!-- <div class="item">item</div> -->
      <div class="item float-right">2</div>
      <div class="item">item</div>
      <div class="item float-right">3</div>
    </div>
    <div class="container">
      <div class="item item-in-float">item</div>
      <div class="item float">1</div>
      <div class="item item-in-float"><div>item</div></div>
      <div class="item float">2</div>
      <div class="item float">3</div>
      <div class="item float">4</div>
      <div class="item float">5</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      containerWidth: null,
    }
  },
}
</script>
<style lang="less" scoped>
@import './global';
.wrapper {
  text-align: initial;
  .container {
    overflow: auto;
    &.inline-block {
      .item {
        display: inline-block;
      }
    }
  }
  .item {
    width: 50px;
    height: 50px;
  }
  .float {
    float: left;
    background: grey;
  }
  .float-right {
    float: right;
    background: grey;
  }
  .item-in-float {
    background: red;
    margin-left: 33px;
  }
  .responsive {
    width: 30%;
  }
  .bfc {
    overflow: hidden;
  }
}

@media screen and (max-width: 800px) {
  .responsive-container {
    width: 600px !important;
    border: 2px solid greenyellow;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1200px) {
  .responsive-container {
    width: 1200px !important;
    border: 2px solid greenyellow;
  }
}
</style>
