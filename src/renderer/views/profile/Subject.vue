<template>
  <div class="subject">
    <div class="header">
      <div class="title">{{subject.name}}</div>
    </div>
    <div class="content">
      <hxw-input
        :value="newQaInput"
        class="new-qa-input"
        color="#FFF"
        icon="add"
        hint="添加新问题"
        @input="newQaInput = $event"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/common/Input.vue'

export default Vue.extend({
  components: {
    'hxw-input': Input
  },
  data () {
    return {
      idx: 0,
      newQaInput: ''
    }
  },
  computed: {
    subject () {
      return this.$store.state.data.subjectList[this.idx]
    }
  },
  mounted () {
    this.idx = Number.parseInt(this.$route.query.idx)
  },
  watch: {
    $route () {
      this.idx = Number.parseInt(this.$route.query.idx)
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.subject {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    @include col;
    flex: 1;
    padding: 0 2rem;

    .new-qa-input {
      width: 100%;
      margin-top: auto;
      margin-bottom: 2rem;
      border: none;
      background-color: rgba(#000, 0.1);
    }
  }
}
</style>
