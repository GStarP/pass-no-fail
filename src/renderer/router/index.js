import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      component: () => import('@/views/Profile.vue'),
      children: [
        {
          path: 'setting',
          component: () => import('@/views/profile/Setting.vue')
        },
        {
          path: 'subject',
          component: () => import('@/views/profile/Subject.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/profile/setting'
    }
  ]
})
