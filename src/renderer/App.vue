<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'pass-no-fail'
  }
</script>

<style lang="scss">
@import "@/assets/main.scss";

html, body {
  margin: 0;
  min-height: 100vh;
  font-family: '微软雅黑';
}
div {
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  background-color: $background;
}
::-webkit-scrollbar {
  background-color: $background;
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(#333, 0.4);
  border-radius: 16px;
  &:hover {
    background-color: rgba(#333, 0.6);
  }
  &:active {
    background-color: rgba(#333, 0.8);
  }
}

::-webkit-scrollbar-track-piece {
  margin: 4px;
}
</style>
