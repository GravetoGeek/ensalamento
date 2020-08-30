import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Inicio from '../views/Inicio.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



  const routes = [
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: Home
  //},
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/sobre',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
