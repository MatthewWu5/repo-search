<template>
  <div>
    <!-- inline -->
    text
    <span class="item margin">span</span>
    <a class="item padding big-padding" href="">link element</a>
    <!-- click label => focus on id -->
    <label class="item" for="input-btn-id">label</label>
    <em class="item">em</em>
    <strong class="item">strong</strong>

    <!-- block -->
    <div class="item margin">div</div>
    <!-- <div class="bfc-area">
      <div class="item margin">div</div>
    </div> -->
    <p class="item margin margin-top-16">p</p>
    <h2 class="item padding">h1-h6</h2>
    <ul class="item">
      <li>ul</li>
      <li>ol</li>
    </ul>

    <!-- inline-block -->
    <button class="item">button</button>
    <input class="item" type="text" />
    <input class="item" type="button" id="input-btn-id" />
    <img
      class="item"
      src="https://avatars0.githubusercontent.com/u/16813684?s=88&v=4"
      alt="venom"
    />
  </div>
</template>
<style lang="less" scoped>
.item {
  width: 100px;
  height: 100px;
  border: 1px solid grey;
}
.margin {
  margin: 8px;
}
.margin-top-16 {
  margin-top: 16px;
}
.padding {
  padding: 8px;
}
.big-padding {
  /* padding-top: 100px; */
  /* padding-bottom: 100px; */
}
.bfc-area {
  /* overflow: hidden; */
}
</style>
