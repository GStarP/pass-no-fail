<template>
  <div class="profile">
    <div class="aside"></div>
    <div class="main">
      <div class="header">
        <div class="title">{{subject.name}}</div>
        <a style="margin-left: auto;" @click="$router.push('/')">BACK</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      idx: 0
    }
  },
  computed: {
    subject () {
      console.log(this.$store.state.data.subjectList[this.idx])
      return this.$store.state.data.subjectList[this.idx]
    }
  },
  mounted () {
    this.idx = Number.parseInt(this.$route.query.idx)
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/main.scss";

.profile {
  @include row;
  width: 100%;
  height: 100vh;
  .aside {
    width: 280px;
    height: 100%;
    background-color: $text;
  }
  .main {
    flex: 1;
    height: 100%;
    .header {
      $h: 80px;

      @include row;
      padding: 0 2rem;
      height: $h;
      line-height: $h;
      
      .title {
        font-size: 24px;
        font-weight: bold;
        color: $text;
      }
    }
  }
}
</style>
