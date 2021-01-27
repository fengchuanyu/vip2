import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:"/pageone",
    name:"PageOne",
    component:() => import('../views/Page1.vue')
  },{
    path:"/pagetwo",
    name:"PageTwo",
    component: () => import('../views/Page2.vue')
  },{
    path:"/pagethree/:username",
    name:"PageThree",
    component: () => import('../views/Page3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
