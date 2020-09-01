import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { getStore, updateStore } from '../util/store'
import { getCurTimeStr } from '../util/time'

Vue.use(Vuex)

const ADD_SUBJECT = 'ADD_SUBJECT'
const ADD_QA = 'ADD_QA'

export default new Vuex.Store({
  state: {
    data: getStore()
  },
  mutations: {
    /**
     * 添加主题
     * @param {string} name 主题名称
     */
    [ADD_SUBJECT] (state, payload) {
      if (payload.name) {
        state.data.subjectList.push({
          name: payload.name,
          lastUpdateTime: getCurTimeStr(),
          qaNum: 0,
          qaList: []
        })
        updateStore(state.data)
      }
    },
    /**
     * 添加问题
     * @param {number} subjectIdx 主题索引
     * @param {string} q 问题描述
     * @param {string} a 问题答案
     */
    [ADD_QA] (state, payload) {
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
