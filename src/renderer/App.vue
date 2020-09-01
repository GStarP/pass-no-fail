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
  width: 0px;
}
</style>
