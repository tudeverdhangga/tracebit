import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

import cookieServices from '@/utils/cookieServices'

const Login = () => import('@/views/Login/index.vue')
const Dashboard = () => import('@/views/Dashboard/index.vue')
const Form = () => import('@/views/Form/index.vue')
const EmptyRouterView = () => import('@/views/EmptyRouterView/index.vue')

Vue.use(VueRouter)

const isLoggedIn = cookieServices.getAccessToken()
const isSession = store.get('session')
const isAuthenticated = isLoggedIn && isSession

const routes = [
  {
    path: '/',
    name: 'root',
    component: EmptyRouterView,
    redirect: { path: 'dashboard' },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next) {
          if (isAuthenticated) {
            next('/dashboard')
          } else {
            next()
          }
        }
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/form',
        name: 'Form',
        component: Form,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from) {
    if (to.path !== from.path) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes
})

router.beforeEach((to, _, next) => {
  if (!isAuthenticated && to.meta.requiresAuth) {
    cookieServices.clearCookie()
    store.remove('session')

    return next('/login')
  }

  return next()
})

export default router
