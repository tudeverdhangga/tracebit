import Vue from 'vue'

import API_URL from '@/services'

export default function useActions({ state }) {
  const fetchLandingPage = async ({
    params,
    preload = () => null
  }) => {
    preload(true)
    try {
      const { data } = await API_URL.landingPage.getLandingPage(params)

      state.landingPage = {
        data: data.data,
        meta: {
          currentPage: data.current_page,
          from: data.from,
          lastPage: data.last_page,
          perPage: data.per_page,
          to: data.to,
          total: data.total
        }
      }
    } catch (err) {
      Vue.$toast.error(err?.response?.data?.message ?? err.response)
    } finally {
      preload(false)
    }
  }

  return {
    fetchLandingPage
  }
}
