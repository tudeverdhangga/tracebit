import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import axios from 'axios'
import Toast from 'vue-toastification'
import store from 'store'
import VueApexCharts from 'vue-apexcharts'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import validation from './plugins/validation'
import Http from '@/services/http'

import 'vue-toastification/dist/index.css'


Vue.config.productionTip = false

const toastOptions = {
  transition: 'Vue-Toastification__bounce',
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  draggable: true,
  draggablePercent: 0.6,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true
}

Vue.use(PiniaVuePlugin)
Vue.use(Toast, toastOptions)
Vue.use(VueApexCharts)

const pinia = createPinia()

axios.defaults.baseURL = process.env.VUE_APP_API_URL || 'http://127.0.0.1:8000/api'

new Vue({
  vuetify,
  router,
  store,
  pinia,
  created: () => Http.init(),
  render: h => h(App)
}).$mount('#app')
