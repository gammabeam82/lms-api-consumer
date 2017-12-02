import Vue from 'vue'
import Router from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
import routes from './routes'
import { TOKEN_STORAGE_KEY } from '../config'
import store from '../store'

Vue.use(Router)
Vue.use(VueLocalStorage)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  let token = Vue.localStorage.get(TOKEN_STORAGE_KEY)
  if (token) {
    store.dispatch('setToken', token)
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
