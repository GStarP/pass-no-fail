<template>
  <div
    class="text-field"
    ref="tf"
    v-html="value"
    :contenteditable="editing"
    @click.stop="startEdit"
    @blur="endEdit"
  ></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { htmlText } from '@/util/text.js'

export default Vue.extend({
  props: ['val'],
  data () {
    return {
      editing: false,
      value: this.val,
      oldValue: this.val
    }
  },
  methods: {
    startEdit () {
      if (!this.editing) {
        this.editing = true
        if (this.value === '请输入问题答案') {
          this.value = ''
        }
        this.$refs.tf.focus()
      }
    },
    endEdit () {
      this.value = htmlText(this.$refs.tf.innerText)
      if (this.value === '') {
        this.$nextTick(() => {
          this.value = this.oldValue
        })
      } else if (this.value !== this.oldValue) {
        // alert(this.value)
        this.$emit('change', this.value)
        this.oldValue = this.value
      }
    }
  },
  watch: {
    val (v) {
      this.value = v
    }
  }
})
</script>

<style lang="scss">
.text-field {
  $h: 1.2rem;
  line-height: $h;
  min-height: $h;
  font-size: .9rem;
  max-width: 100%;

  &:hover {
    cursor: text;
  }
  &:focus {
    outline: none;
  }

}
</style>
