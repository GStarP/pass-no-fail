<template>
  <div class="home">
    <div class="header">
      <div class="name">PASS-NO-FAIL</div>
      <hxw-btn outlined @click="addSubject">新建主题</hxw-btn>
    </div>
    <div class="content">
      <div class="subject-list">
        <subject
          v-for="(subject, i) of subjectList"
          :key="i"
          :idx="i"
          :data="subject"
          @click="toSubjectProfile(i)"
        />
      </div>
      <!-- 无主题引导 -->
      <div class="hint" v-if="subjectList.length === 0">
        <div>还没有主题</div>
        <div>快去新建一个吧</div>
      </div>
    </div>
  </div>
</template>

<script>
import Subject from '@/components/Subject.vue'
import Button from '@/components/common/Button.vue'
import MessageBox from '@/components/common/message-box'

export default {
  components: {
    'subject': Subject,
    'hxw-btn': Button
  },
  methods: {
    addSubject () {
      MessageBox.input('新建主题', '请输入主题名称').then(res => {
        this.$store.commit('ADD_SUBJECT', {
          name: res
        })
      }).catch(() => {})
    }
  },
  computed: {
    subjectList () {
      return this.$store.state.data.subjectList
    }
  },
  mounted () {
    console.log(this.$store.state.data)
  }
}
</script>

<style lang="scss">
@import "@/assets/main.scss";

.home {
  $header-h: 96px;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .header {
    $h: $header-h;
    $p: 32px;
    
    position: fixed;
    z-index: 67;
    display: flex;
    align-items: center;
    width: 100%;
    height: $h;
    padding: 0 $p;
    background-color: rgba($background, 0.99);

    .name {
      font-size: 1.5rem;
      color: $text;
      font-weight: bold;
    }
    .btn {
      margin-left: auto;
      border-color: #FFF;
      color: #FFF;
    }
  }
  .content {
    width: 100%;
    margin-top: $header-h;
    padding-bottom: 1rem;
  }
  .subject-list {
    width: 100%;
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    >div {
      @media screen and (max-width: 1080px){
        width: 31%;
        margin: 8px 1%;
      }
      @media screen and (min-width: 1080px){
        width: 23%;
        margin: 8px 1%;
      }
    }
  }
  .hint {
    font-size: 2rem;
    color: $text;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 40%;
    >div:not(:last-child) {
      margin-bottom: 0.625rem;
    }
  }
}
</style>
