<template>
  <div :style="style"></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    size: {
      type: Number,
      default: 16
    },
    name: {
      type: String,
      default: 'triple_line'
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      if (this.color) {
        return {
          'mask': `url('static/icon/${this.name}.svg') no-repeat 50% 50%`,
          '-webkit-mask': `url('static/icon/${this.name}.svg') no-repeat 50% 50%`,
          'mask-size': 'contain',
          '-webkit-mask-size': 'contain',
          'width': `${this.size}px`,
          'height': `${this.size}px`,
          'background-color': this.color
        }
      } else {
        return {
          'background': `url('static/icon/${this.name}.svg') no-repeat 50% 50%`,
          'background-size': 'contain',
          'width': `${this.size}px`,
          'height': `${this.size}px`
        }
      }
    }
  }
})
</script>
