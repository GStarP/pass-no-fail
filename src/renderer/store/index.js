import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { getStore } from '../util/store'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  state: {
    data: getStore()
  },
  mutations: {
    /**
     * 添加主题
     * @param {string} name 主题名称
     */
    ADD_SUBJECT (state, payload) {
      if (payload.name) {
        state.data.subjectList.push({
          name: payload.name,
          lastUpdateTime: new Date().toLocaleTimeString(),
          qaNum: 0,
          qaList: []
        })
      }
    },
    /**
     * 添加问题
     * @param {number} subjectIdx 主题索引
     * @param {string} q 问题描述
     * @param {string} a 问题答案
     */
    ADD_QA (state, payload) {
      if (payload.subjectIdx && payload.q && payload.a) {
        state.data.subjectList[payload.subjectIdx].push({
          q: payload.q,
          a: payload.a,
          viewTime: 0
        })
      }
    }
  }
})
