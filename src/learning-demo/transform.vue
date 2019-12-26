<template>
  <div class="container">
    <h5>transition & transform</h5>
    <img
      :class="[
        'arrow',
        {
          up: arrowUp,
        },
      ]"
      @click="arrowUp = !arrowUp"
      src="../assets/logo.png"
    />

    <h5>animation</h5>
    <img
      :class="[
        'arrow',
        'animation-rotating',
        {
          up: arrowUp,
        },
      ]"
      @click="arrowUp = !arrowUp"
      src="../assets/logo.png"
    />
    <img
      :class="[
        'arrow',
        'animation-move-right',
        {
          up: arrowUp,
        },
      ]"
      @click="arrowUp = !arrowUp"
      src="../assets/logo.png"
    />
    <img
      :class="[
        'arrow',
        'animation-move-left',
        {
          up: arrowUp,
        },
      ]"
      @click="arrowUp = !arrowUp"
      src="../assets/logo.png"
    />
    <div class="animation-scale">
      <div>animation-scale</div>
      <img
        :class="[
          'arrow',
          {
            up: arrowUp,
          },
        ]"
        @click="arrowUp = !arrowUp"
        src="../assets/logo.png"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrowUp: false,
    }
  },
}
</script>
<style lang="less" scoped>
.container {
  position: relative;
  .arrow {
    width: 50px;
    height: 50px;
    transition: all 0.5s ease;
    &.up {
      transform: rotate(180deg);
    }
    &.animation-rotating {
      animation: rotating 1s infinite;
    }
    &.animation-move-right {
      position: absolute;
      animation: move-right 2s infinite;
    }
    &.animation-move-left {
      position: absolute;
      animation: move-left 2s infinite;
    }
  }
  .animation-scale {
    position: absolute;
    animation: scale 2s infinite;
  }
}
@keyframes rotating {
  from {
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes move-right {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}
@keyframes move-left {
  0% {
    right: 0;
  }
  50% {
    right: 200px;
  }
  100% {
    right: 0;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.5);
    top: 0;
    left: 0;
  }
  50% {
    transform: scale(2);
    top: 200px;
    left: 200px;
  }
  100% {
    transform: scale(0.5);
    top: 0;
    left: 0;
  }
}
</style>
