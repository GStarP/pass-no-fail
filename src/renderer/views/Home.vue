<template>
  <div class="home">
    <div class="header">
    </div>
    <div class="subject-list">
      <subject
        v-for="(subject, i) of $store.state.data.subjectList"
        :key="i"
        :data="subject"
      />
    </div>
  </div>
</template>

<script>
import Subject from '@/components/Subject.vue'

export default {
  components: {
    'subject': Subject
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  },
  mounted () {
    console.log(this.$store.state.data)
  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
