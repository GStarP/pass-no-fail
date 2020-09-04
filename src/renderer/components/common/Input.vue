<template>
  <div class="input">
    <hxw-icon
      v-if="icon"
      class="icon"
      :name="icon"
      :size="16"
      :color="color"
    />
    <div class="main">
      <input
        ref="ie"
        :value="val"
        type="text"
        @input="onInput"
        @keyup.enter="onSubmit"
      >
      <div class="text"
        v-show="value === ''"
        :style="`color: ${color}`"
      >{{hint}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/components/common/Icon.vue'

export default Vue.extend({
  components: {
    'hxw-icon': Icon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#676767'
    },
    hint: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      val: ''
    }
  },
  methods: {
    onInput (e) {
      this.val = e.target.value
      this.$emit('input', this.val)
    },
    onSubmit () {
      this.$emit('submit')
      this.$refs.ie.blur()
    }
  },
  watch: {
    value (v) {
      this.val = v
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.input {
  height: 48px;
  padding: 0 12px;
  border: 1px solid $caption;
  border-radius: 4px;
  font-size: $small;
  @include row;

  .icon {
    margin-right: 12px;
  }

  .main {
    @include row;
    position: relative;
    .text {
      user-select:none;
      position: absolute;
      font-size: inherit;
      color: $caption;
    }
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
