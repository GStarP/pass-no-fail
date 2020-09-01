<template>
  <div class="subject card" @click="toSubjectProfile()">
    <div class="subject__main">{{data.name}}</div>
    <div class="subject__info">
      <div class="subject__info-item">
        <div class="subject__info-item__text">问题总数</div>
        <div class="subject__info-item__data">{{data.qaNum}}</div>
      </div>
      <div class="subject__info-item">
        <div class="subject__info-item__text">上次更新</div>
        <div class="subject__info-item__data">{{getTimeStr(data.lastUpdateTime)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getTimeStr } from '../util/time'

export default Vue.extend({
  props: ['data', 'idx'],
  methods: {
    // TODO 不包裹会出现 use before render
    getTimeStr (str) {
      return getTimeStr(str)
    },
    toSubjectProfile () {
      this.$router.push({
        path: '/profile',
        query: {
          idx: this.idx
        }
      })
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/main.scss";

.subject {
  @include col;
  padding-bottom: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: #EFEFEF;
    transition: background-color .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  &__main {
    $h: 5rem;
    $spacing: 2px;
    height: $h;
    line-height: $h;
    font-size: $big;
    @include spacing($spacing);
    @include line(1);
    margin-bottom: 0.5rem;
  }
  &__info {
    @include row;
    width: 100%;
    &-item {
      width: 50%;
      margin-bottom: 8px;
      @include col;
      &__text {
        color: $caption;
        font-size: $small;
        font-weight: 300;
        @include spacing(1px);
      }
      &__data {
        margin-top: 8px;
        font-size: 15px;
        @include spacing(1px);
      }
    }
  }
}
</style>
