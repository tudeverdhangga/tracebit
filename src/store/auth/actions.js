import Vue from 'vue'
import store from 'store'

import API_URL from '@/services'
import cookieServices from '@/utils/cookieServices'

export default function useActions({ state }) {

  const login = async ({
    data,
    preload = () => null
  }) => {
    preload(true)
    try {
      const res = await API_URL.auth.login(data)

      // Set token
      cookieServices.setCookie(res)
      store.set('session', res.userData)

      Vue.$toast.info('Successfully login. Please wait...')
      setTimeout(() => {
        window.location.reload()
      }, 3000)
    } catch (err) {
      Vue.$toast.error(err?.response?.data?.message ?? err.response)
    } finally {
      preload(false)
    }
  }

  return {
    login
  }
}
