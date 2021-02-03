import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/users/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
