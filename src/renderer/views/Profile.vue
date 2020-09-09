<template>
  <div class="profile">
    <div class="aside">
      <div id="support"/>
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
      <div class="no-data-hint" v-if="subjectList.length === 0">还没有主题<br>快去新建主题吧~</div>
      <div class="menu sub-menu">
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
      <hxw-input
        class="new-sub-input"
        :value="newSubInput"
        icon="add"
        color="#676767"
        hint="新建一个主题"
        @input="newSubInput = $event"
        @submit="addSubject"
      />
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
import Input from '@/components/common/Input.vue'

export default Vue.extend({
  components: {
    'hxw-menu-item': MenuItem,
    'hxw-input': Input
  },
  data () {
    return {
      active: 'setting',
      newSubInput: ''
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
    },
    addSubject () {
      if (this.newSubInput !== '') {
        this.$store.commit('ADD_SUBJECT', {
          name: this.newSubInput
        })
        this.newSubInput = ''
      }
    }
  }
})
</script>

<style lang="scss">
@import "static/main.scss";

.profile {
  @include row;
  width: 100%;
  height: 100vh;
  .aside {
    width: 280px;
    height: 100%;
    background-color: $text;
    display: flex;
    flex-direction: column;
    position: relative;

    .divider {
      margin: 0.625rem 1rem;
      border: 0.5px solid $grey;
    }

    .no-data-hint {
      color: $black;
      font-size: $big;
      top: 40%;
    }

    .sub-menu {
      flex: 1;
      overflow: scroll;
      
      &::-webkit-scrollbar {
        width: 0;
        height: 2px;
      }

    }

    .new-sub-input {
      border-radius: 0;
      border: none;
      margin: 0 1rem;
      background-color: rgba(#676767, 0.1);
      border-radius: 4px;
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
        @include line(1);
      }
    }
  }
}
</style>
