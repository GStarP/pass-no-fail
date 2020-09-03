<template>
  <div class="profile">
    <div class="aside">
      <div class="divider"/>
      <div class="menu">
        <hxw-menu-item
          :important="true"
          :active="active === 'setting'"
          icon="setting"
          text="设置"
          color="#455A64"
          @click="go('setting')"
        />
      </div>
      <div class="divider"/>
      <div class="menu">
        <hxw-menu-item
          :active="active === i"
          v-for="(sub, i) of subjectList"
          :key="'sub' + i"
          :text="sub.name"
          color="#5C6BC0"
          :num="sub.qaNum"
          @click="go(i)"
        />
      </div>
      <div class="divider"/>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MenuItem from '@/components/menu/MenuItem.vue'

export default Vue.extend({
  components: {
    'hxw-menu-item': MenuItem
  },
  data () {
    return {
      active: 'setting'
    }
  },
  computed: {
    subjectList () {
      return this.$store.state.data.subjectList
    }
  },
  methods: {
    go (dest) {
      this.active = dest
      if (dest === 'setting') {
        this.$router.push({
          path: '/profile/setting'
        })
      } else {
        this.$router.push({
          path: `/profile/subject?idx=${dest}`
        })
      }
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.profile {
  @include row;
  width: 100%;
  height: 100vh;
  .aside {
    width: 280px;
    height: 100%;
    background-color: $text;

    .divider {
      margin: 0.875rem 1rem;
      border: 0.5px solid $grey;
    }
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
