import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pratice from '../views/Pratice.vue'



Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home'},
  {path: '/about', component: About ,name: 'About'},
  {path: '/pratice',component: Pratice, name: 'Pratice'},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
