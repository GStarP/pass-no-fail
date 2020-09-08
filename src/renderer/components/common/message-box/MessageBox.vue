<template>
  <transition name="fade">
    <div v-show="show">
      <div class="mask"></div>
      <div class="message-box">
        <div class="card message-box__content">
          <div class="message-box__title">{{title}}</div>
          <hxw-input
            :value="inputVal"
            class="message-box__input"
            :hint="hint"
            @change="onChange"
          />
          <div class="message-box__footer">
            <div style="margin-left: auto;"></div>
            <hxw-btn
              class="cancel"
              size="small"
              @click="handleAction('cancel')"
            >取消</hxw-btn>
            <hxw-btn
              class="confirm"
              size="small"
              @click="handleAction('confirm')"
            >确认</hxw-btn>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'
import Button from '@/components/common/Button.vue'
import Input from '@/components/common/Input.vue'

export default Vue.extend({
  components: {
    'hxw-btn': Button,
    'hxw-input': Input
  },
  data () {
    return {
      show: false,
      title: '',
      hint: '',
      action: '',
      callback: null,
      inputVal: ''
    }
  },
  methods: {
    handleAction (action) {
      this.action = action
      this.doClose()
    },
    doClose () {
      this.show = false
      setTimeout(() => {
        if (this.callback) {
          this.callback(this.action, this)
        }
      })
    },
    onChange (val) {
      this.inputVal = val
    }
  }
})
</script>

<style lang="scss">
@import "static/main.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.mask {
  position: fixed;
  z-index: 101;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
}
.message-box {
  position: fixed;
  z-index: 102;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include all-center;
  &__content {
    @include col;
    min-width: 320px;
  }
  &__title {
    width: 100%;
    font-size: 20px;
    margin-bottom: 2rem;
  }
  &__input {
    margin-bottom: 2rem;
    width: 90%;
  }
  &__footer {
    @include row;
    width: 100%;
    margin-bottom: -0.5rem;
    >div {
      margin-left: 4px;
    }
    .cancel {
      color: $error;
      &:hover {
        background-color: rgba($error, 0.1);
      }
    }
    .confirm {
      color: $background;
      &:hover {
        background-color: rgba($background, 0.1);
      }
    }
  }
}
</style>
