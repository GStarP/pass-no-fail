<template>
  <div class="expansion-panel">
    <div class="expansion-panel-preview" @click="toggleExpand">
      <div class="expansion-panel-preview__text">{{preview}}</div>
      <hxw-icon
        class="expansion-panel-preview__icon"
        :size="16"
        name="arrow"
        color="#666"
        :style="iconExpandStyle"
      />
    </div>
    <div
      class="expansion-panel-content"
      v-show="expand"
    >
      <div class="expansion-panel-content__text">{{content}}</div>
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
  props: ['preview', 'content'],
  data () {
    return {
      expand: false
    }
  },
  computed: {
    iconExpandStyle () {
      if (this.expand) {
        return {
          'transform': 'none'
        }
      } else {
        return ''
      }
    }
  },
  methods: {
    toggleExpand () {
      this.expand = !this.expand
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.expansion-panel {
  border-radius: 4px;
  background-color: $text;
  color: $black;

  &-preview {
    @include row;
    padding: 16px 16px;

    &:hover {
      cursor: pointer;
    }

    &__text {
      font-size: .9375rem;
      line-height: 1.375rem;
      user-select: none;
      flex: 1;
    }

    &__icon {
      transform: rotate(-90deg);
      transition: transform .3s cubic-bezier(.25, .8, .5, 1);
    }
  }

  &-content {
    @include row;

    &__text {
      font-size: $small;
      padding: 0 16px 16px;
      flex: 1;
      user-select: none;
    }
  }
}
</style>
