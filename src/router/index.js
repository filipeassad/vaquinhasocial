
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './main'
import auth from './auth'
import admin from './admin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [main, auth, admin]
})

export default router
