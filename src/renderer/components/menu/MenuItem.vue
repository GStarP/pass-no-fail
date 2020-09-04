<template>
  <div class="menu-item" :style="activeStyle" @click="onClick">
    <hxw-icon class="menu-item__icon" :name="icon" :color="color" :size="16"/>
    <div class="menu-item__text">{{text}}</div>
    <div v-if="num !== undefined" class="menu-item__num">{{num}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/components/common/Icon.vue'
import { hexToRGBA } from '@/util/color.js'

export default Vue.extend({
  props: ['icon', 'color', 'text', 'num', 'active', 'important'],
  components: {
    'hxw-icon': Icon
  },
  computed: {
    activeStyle () {
      if (this.active) {
        const c = hexToRGBA(this.color)
        return {
          'color': this.color,
          'font-weight': 'bold',
          'background-color': `rgba(${c.r}, ${c.g}, ${c.b}, 0.1)`
        }
      } else {
        if (this.important) {
          return {
            'color': this.color,
            'font-weight': 'bold'
          }
        }
        return ''
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

.menu {
  .menu-item {
    @include row;

    $h: 48px;
    height: $h;
    width: 100%;
    margin-bottom: 2px;
    padding: 1rem;

    &:hover {
      background-color: $grey;
      cursor: pointer;
    }

    &__icon {
      margin-right: 12px;
    }

    &__text {
      font-size: $small;
      user-select: none;
      margin-top: -1px;
      flex: 1;
      @include line(1);
    }

    &__num {
      margin-left: auto;
      color: $caption;
      font-size: $small;
      user-select: none;
    }
  }
}
</style>
