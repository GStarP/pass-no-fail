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
</style>
