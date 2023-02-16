import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useActions from './actions'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    user: {}
  })

  const actions = useActions({ state })

  return {
    state,
    ...actions
  }
})
