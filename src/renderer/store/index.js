import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState, createSharedMutations } from 'vuex-electron'
import { getStore, updateStore } from '../util/store'
import { getCurTimeStr } from '../util/time'

Vue.use(Vuex)

const ADD_SUBJECT = 'ADD_SUBJECT'
const ADD_QA = 'ADD_QA'
const UPDATE_QA = 'UPDATE_QA'

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
      if ((payload.subjectIdx >= 0) && payload.q && payload.a) {
        state.data.subjectList[payload.subjectIdx].qaList.push({
          q: payload.q,
          a: payload.a
        })
        state.data.subjectList[payload.subjectIdx].qaNum += 1
        updateStore(state.data)
      }
    },
    /**
     * 修改问题
     * @param {number} subjectIdx 主题索引
     * @param {number} qaIdx 问题索引
     * @param {string} q 问题描述
     * @param {string} a 问题答案
     */
    [UPDATE_QA] (state, payload) {
      if ((payload.subjectIdx >= 0) && (payload.qaIdx >= 0)) {
        if (payload.q) {
          state.data.subjectList[payload.subjectIdx].qaList[payload.qaIdx].q = payload.q
        }
        if (payload.a) {
          state.data.subjectList[payload.subjectIdx].qaList[payload.qaIdx].a = payload.a
        }
        updateStore(state.data)
      }
    }
  }
})
