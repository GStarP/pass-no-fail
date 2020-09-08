<template>
  <div class="expansion-panel">
    <div class="expansion-panel-preview" @click="toggleExpand">
      <div class="expansion-panel-preview__text">
        <hxw-text-field
          :val="q"
          @change="onQChange"
        />
      </div>
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
      <div class="expansion-panel-content__text">
        <hxw-text-field
          :val="a"
          @change="onAChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from '@/components/common/Icon.vue'
import TextField from '@/components/common/TextField.vue'

export default Vue.extend({
  components: {
    'hxw-icon': Icon,
    'hxw-text-field': TextField
  },
  props: ['preview', 'content', 'subjectIdx', 'qaIdx'],
  data () {
    return {
      expand: false,
      q: this.preview,
      a: this.content
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
    },
    onQChange (val) {
      if (val !== '') {
        this.q = val
        this.$store.commit('UPDATE_QA', {
          subjectIdx: this.subjectIdx,
          qaIdx: this.qaIdx,
          q: this.q
        })
      }
    },
    onAChange (val) {
      if (val !== '') {
        this.a = val
        this.$store.commit('UPDATE_QA', {
          subjectIdx: this.subjectIdx,
          qaIdx: this.qaIdx,
          a: this.a
        })
      }
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
      flex: 1;
    }

    &__icon {
      margin-left: 1rem;
      transform: rotate(-90deg);
      transition: transform .3s cubic-bezier(.25, .8, .5, 1);
    }
  }

  &-content {
    @include row;

    &__text {
      padding: 0 16px 16px;
      flex: 1;
    }

    .text-field {
      font-size: $small;
      line-height: 1rem;
    }
  }
}
</style>
