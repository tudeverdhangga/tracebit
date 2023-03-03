import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useActions from './actions'

export const useLandingPageStore = defineStore('landingPage', () => {
  const state = reactive({
    landingPage: {}
  })

  const actions = useActions({ state })

  return {
    state,
    ...actions
  }
})
