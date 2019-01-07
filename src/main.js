import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import store from './store'
import router from './router'
import App from './App.vue'
import auth from './auth'

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  auth,
  render: h => h(App),
})
