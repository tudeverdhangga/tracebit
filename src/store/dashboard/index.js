import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useActions from './actions'

export const useDashboardStore = defineStore('dashboard', () => {
  const state = reactive({
    chart: {
      seriesData: [
        {
          name: 'New Leads',
          data: [
            10,
            10,
            0,
            5,
            2,
            14,
            8,
            8,
            0,
            2,
            2,
            0
          ],
          type: 'line',
          color: '#03C3FF',
          checked: true
        },
        {
          name: 'Visit/Meeting',
          data: [
            20,
            16,
            10,
            5,
            3,
            14,
            9,
            8,
            10,
            20,
            20,
            22
          ],
          type: 'line',
          color: '#8EFFA0',
          checked: true
        },
        {
          name: 'Deal',
          data: [
            10,
            8,
            0,
            5,
            1,
            10,
            5,
            8,
            0,
            2,
            0,
            0
          ],
          type: 'line',
          color: '#C08EFF',
          checked: true
        }
      ],
      month: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      year: '2023',
      isLoading: false
    },
    topMarketingChannel: {
      data: [],
      insight: {
        percentage: 1,
        marketingChannel: 'Mediaku',
        landingPage: 'LP Newest',
        metrics: 'Visit/Meeting',
        leadsMonth: 'Januari',
        dealMonth: 'Februari'
      }
    }
  })

  const actions = useActions({ state })

  return {
    state,
    ...actions
  }
})
