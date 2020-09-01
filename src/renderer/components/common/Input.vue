<template>
  <div class="input">
    <input
      v-model="value"
      type="text"
      @change="onChange"
    >
    <div class="hint" v-show="value===''">{{hint}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    hint: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onChange (e) {
      this.value = e.target.value
      this.$emit('change', this.value)
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.input {
  height: 48px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid $caption;
  border-radius: 4px;
  font-size: $normal;
  .hint {
    user-select:none;
    position: absolute;
    left: 12px;
    font-size: $small;
    font-weight: 300;
    color: $caption;
  }
  input {
    width: 100%;
    border: none;
    line-height: 20px;
    height: 20px;
    font-size: inherit;
    font-family: '微软雅黑';
    background: transparent;
    z-index: 1;
    &:focus {
      outline: none;
    }
  }
}
</style>
