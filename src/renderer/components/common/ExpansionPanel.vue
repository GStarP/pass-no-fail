<template>
  <div class="expansion-panel" @contextmenu.prevent="onRclick($event)">
    <hxw-ctx-menu
      :cmShow="ctxMenuShow"
      :x="ctxMenuX"
      :y="ctxMenuY"
      @close="ctxMenuShow = false"
    >
      <div class="ctx-menu-menu">
        <div class="ctx-menu-item menu-item-del" @click="delQA">
          <hxw-icon
            class="ctx-menu-item__icon"
            name="delete"
          />
          <div class="ctx-menu-item__text">删除</div>
        </div>
      </div>
    </hxw-ctx-menu>
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
import CtxMenu from '@/components/common/CtxMenu.vue'

export default Vue.extend({
  components: {
    'hxw-icon': Icon,
    'hxw-text-field': TextField,
    'hxw-ctx-menu': CtxMenu
  },
  props: ['preview', 'content', 'subjectIdx', 'qaIdx'],
  data () {
    return {
      expand: false,
      q: this.preview,
      a: this.content,
      ctxMenuShow: false,
      ctxMenuX: 0,
      ctxMenuY: 0
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
    onRclick (e) {
      this.ctxMenuShow = true
      this.ctxMenuX = e.offsetX
      this.ctxMenuY = e.offsetY
    },
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
    },
    delQA () {
      this.$store.commit('DEL_QA', {
        subjectIdx: this.subjectIdx,
        qaIdx: this.qaIdx
      })
    }
  }
})
</script>

<style lang="scss">
@import "static/main.scss";

.expansion-panel {
  border-radius: 4px;
  background-color: $text;
  color: $black;
  position: relative;

  .ctx-menu {
    @include elevation-6;
  }

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
      line-height: 1.1rem;
    }
  }
}
</style>
