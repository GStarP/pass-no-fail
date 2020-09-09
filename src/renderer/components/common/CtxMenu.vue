<template>
  <div
    v-show="show"
    class="ctx-menu"
    :style="locationStyle"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['x', 'y', 'cmShow'],
  data () {
    return {
      show: this.cmShow
    }
  },
  computed: {
    locationStyle () {
      return {
        'top': `${this.y}px`,
        'left': `${this.x}px`
      }
    }
  },
  methods: {
    close () {
      this.show = false
      this.$emit('close')
    }
  },
  watch: {
    cmShow (v) {
      this.show = v
    }
  },
  mounted () {
    document.body.addEventListener('click', this.close)
  }
})
</script>

<style lang="scss">
@import "static/main.scss";

.ctx-menu {
  position: absolute;
  z-index: 11;
  border-radius: 4px;
  overflow: hidden;
}
</style>
