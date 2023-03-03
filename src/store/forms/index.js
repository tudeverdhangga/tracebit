import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useActions from './actions'

export const useFormsStore = defineStore('forms', () => {
  const state = reactive({
    forms: {}
  })

  const actions = useActions({ state })

  return {
    state,
    ...actions
  }
})
