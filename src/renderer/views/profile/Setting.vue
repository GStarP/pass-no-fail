<template>
  <div class="setting">
    <div class="header">
      <div class="title">设置</div>
    </div>
    <div class="content">
      <div class="no-data-hint">暂无自定义设置</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss" scoped>
@import "static/main.scss";

.setting {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
    position: relative;
  }
}
</style>
