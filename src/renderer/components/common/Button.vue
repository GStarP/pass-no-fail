<template>
  <div class="btn" :class="cls" @click="onClick">
    <div class="btn__text">
      <slot/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'hxw-btn',
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    cls () {
      return {
        'btn-outlined': this.outlined,
        'btn-normal': this.size === 'normal',
        'btn-small': this.size === 'small'
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.btn {
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    user-select:none;
    font-size: $small;
    font-weight: 300;
    @include spacing(2px);
  }
  &:hover {
    cursor: pointer;
  }
  transition: background-color .2s cubic-bezier(.4,0,.6,1);
}

.btn-normal {
  $h: 40px;

  height: $h;
  min-width: 72px;
  padding: 0 18px;
  &__text {
    height: $h;
    line-height: $h;
  }
}

.btn-small {
  $h: 36px;

  height: $h;
  min-width: 64px;
  padding: 0 16px;
  &__text {
    height: $h;
    line-height: $h;
  }
}

.btn-outlined {
  border: thin solid;
  border-width: 1px;
  background-color: transparent;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
