import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
