<template>
  <div class="setting">
    <div class="header">
      <div class="title">设置</div>
    </div>
    <div class="content">
      暂无自定义设置
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
})
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.setting {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    @include col;
    flex: 1;
    color: $text;
    font-size: 2rem;
    padding-top: 30%;
  }
}
</style>
