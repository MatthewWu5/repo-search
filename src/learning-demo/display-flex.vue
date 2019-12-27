<template>
  <div>
    <a
      href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool"
      >Flex 布局教程：语法篇</a
    >
    <br />
    flex-start
    <div class="container justify-content">
      <div class="content">1</div>
      <div class="content">2</div>
    </div>
    flex-end
    <div class="container direction justify-content2">
      <div class="content">1</div>
      <div class="content">2</div>
    </div>
    center
    <div class="container center">
      <div class="content">1</div>
      <div class="content">2</div>
    </div>
    reverse
    <div class="container center reverse">
      <div class="content">1</div>
      <div class="content">2</div>
    </div>
    direction
    <div class="container direction center">
      <div class="content">1</div>
      <div class="content">2</div>
    </div>

    flex-grow 占据剩余空间倍数
    <div class="container long">
      <div class="content grow">div</div>
      <div class="content grow">div</div>
      <div class="content grow">div</div>
    </div>

    flex-shrink 1
    <div class="container">
      <div class="content shrink">div</div>
      <div class="content shrink">div</div>
      <div class="content shrink">div</div>
      <div class="content shrink">div</div>
      <div class="content shrink">div</div>
      <div class="content shrink">div</div>
    </div>

    <!-- 弹性盒子不换行 -->
    <!-- flex: 1, flex: 0, flex: 0 0 100px;, margin-left: auto; -->
    flex
    <div class="container">
      <span>span</span>
      <label for="">label</label>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
    </div>

    <div class="container flex-wrap">
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
      <div class="content">div</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container {
  display: flex;
  width: 200px;
  height: 200px;
  border: 1px solid green;
  &.long {
    width: 500px;
  }

  &.flex-wrap {
    flex-wrap: wrap;
  }
  &.direction {
    flex-direction: column;
  }
  &.reverse {
    flex-direction: row-reverse;
  }
  &.justify-content {
    justify-content: flex-start;
  }
  &.justify-content2 {
    justify-content: flex-end;
  }
  &.center {
    justify-content: center;
    align-items: center;
  }
}

.content {
  border: 1px solid grey;
  width: 50px;
  height: 50px;
  &.grow {
    flex-grow: 1;
  }
  &.shrink {
    flex-shrink: 1;
  }
}
</style>
