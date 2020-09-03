<template>
  <div class="setting">
    <div class="header">
      <div class="title">{{subject.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      idx: 0
    }
  },
  computed: {
    subject () {
      return this.$store.state.data.subjectList[this.idx]
    }
  },
  mounted () {
    this.idx = Number.parseInt(this.$route.query.idx)
  },
  watch: {
    $route () {
      this.idx = Number.parseInt(this.$route.query.idx)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
