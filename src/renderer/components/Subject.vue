<template>
  <div class="subject">
    {{data.name}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['data']
})
</script>

<style>
.subject {
  border: 1px solid #000;
  border-radius: 8px;
  padding: 8px 12px;
}
</style>
