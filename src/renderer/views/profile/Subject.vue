<template>
  <div class="subject">
    <div class="header">
      <div class="title">{{subject.name}}</div>
    </div>
    <div class="content">
      <div class="no-data-hint" v-if="subject.qaList.length === 0">还没有问题，快去添加吧~</div>
      <div class="qa-list">
        <hxw-panel
          v-for="(qa, i) of subject.qaList"
          :subjectIdx="idx"
          :qaIdx="i"
          :key="idx + 'qa' + i"
          :preview="qa.q"
          :content="qa.a"
        />
      </div>
      <hxw-input
        :value="newQaInput"
        class="new-qa-input"
        color="#FFF"
        icon="add"
        hint="添加新问题"
        @input="newQaInput = $event"
        @submit="addQA"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/common/Input.vue'
import ExpansionPanel from '@/components/common/ExpansionPanel.vue'

export default Vue.extend({
  components: {
    'hxw-input': Input,
    'hxw-panel': ExpansionPanel
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
  methods: {
    addQA () {
      if (this.newQaInput !== '') {
        this.$store.commit('ADD_QA', {
          subjectIdx: this.idx,
          q: this.newQaInput,
          a: '请输入问题答案'
        })
        this.newQaInput = ''
      }
    }
  },
  beforeMount () {
    if (this.$store.state.data.subjectList.length === 0) {
      this.$router.push({
        path: '/profile/setting'
      })
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
@import "static/main.scss";

.subject {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    @include col;
    flex: 1;
    padding: 0 2rem;
    position: relative;

    .qa-list {
      @include col;
      width: 100%;
      flex: 1;
      overflow: scroll;
      &::-webkit-scrollbar {
        width: 0;
      }
      >div {
        margin-top: 12px;
        width: 100%;
      }
    }

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
