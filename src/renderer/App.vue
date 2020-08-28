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

<style>
html, body {
  margin: 0;
  min-height: 100vh;
  font-family: '微软雅黑';
}
#app {
  min-height: 100vh;
  background-color: #FAFAFA;
}
</style>
