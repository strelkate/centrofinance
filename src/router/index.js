import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalInformation from '../views/PersonalInformation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PersonalInformation',
    component: PersonalInformation
  },
  {
    path: '/conditions',
    name: 'Conditions',
    component: () => import('../views/Сonditions.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
