import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: []
})

/* router */
router.beforeEach((to, from, next) => {
  // this route requires auth, check if logged in
  // if not, redirect to login page.
  if (store.getters.isLogin) {
    next()
  } else {
    store.dispatch('loginByToken').then(() => {
      next({
        ...to,
        replace: true
      })
    })
  }
})

export default router
