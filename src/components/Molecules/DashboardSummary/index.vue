<template>
  <div class="dashboard-summary">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-skeleton-loader
          v-if="isLoading"
          class="w-full"
          type="card"
        />
        <DashboardSummaryItem
          title="Top Performing Marketing Channel"
          :data="marketingChannel"
          :insight="insight"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-skeleton-loader
          v-if="isLoading"
          class="w-full"
          type="card"
        />
        <DashboardSummaryItem
          title="Sales Performance"
          :data="marketingChannel"
          :insight="insight"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import queryString from 'query-string'
import store from 'store'

import DashboardSummaryItem from '@/components/Atoms/DashboardSummaryItem'
import { useDashboardStore } from '@/store/dashboard'

export default {
  name: 'DashboardSummary',
  components: {
    DashboardSummaryItem
  },
  setup() {
    const dashboardStore = useDashboardStore()

    const id = computed(() => store.get('session').id)
    const marketingChannel = computed(() => dashboardStore.state.topMarketingChannel.data)
    const insight = computed(() => dashboardStore.state.topMarketingChannel.insight)

    const isLoading = ref(false)

    onMounted(() => {
      getTopMarketingChannel()
    })

    const getTopMarketingChannel = () => {
      const params = queryString.stringify({ user_id: id.value })
      dashboardStore.getTopMarketingChannel({
        params,
        preload: (loading) => {
          isLoading.value = loading
        }
      })
    }

    return {
      isLoading,
      marketingChannel,
      insight
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
