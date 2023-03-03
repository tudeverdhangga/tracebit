import Vue from 'vue'

import API_URL from '@/services'

export default function useActions({ state }) {
  const changeCheckedWidget = (index, isChecked) => {
    state.chart.seriesData[index].checked = isChecked
  }
  const changeYear = (year) => {
    state.chart.year = year
  }
  const getTopMarketingChannel = async ({
    params,
    preload = () => null
  }) => {
    preload(true)
    try {
      const { data } = await API_URL.leads.getTopMarketingChannel(params)

      state.topMarketingChannel.data = data
    } catch (error) {
      Vue.$toast.error(err?.response?.data?.message ?? err.response)
    } finally {
      preload(false)
    }
  }

  return {
    changeCheckedWidget,
    changeYear,
    getTopMarketingChannel
  }
}
