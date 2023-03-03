<template>
  <div class="dashboard-chart">
    <v-card
      class="dashboard-chart__card"
      outlined
    >
      <div class="card-filter">
        <v-combobox
          v-model="year[0]"
          class="card-filter__year"
          :items="year"
          outlined
          dense
          @change="onChangeYear"
        />
      </div>
      <VueApexCharts
        id="dashboard-lp-chart"
        width="100%"
        height="350px"
        type="line"
        :options="options"
        :series="seriesData.data"
      />
    </v-card>
  </div>
</template>

<script>
import { watch, computed, onMounted } from 'vue'
import VueApexCharts from 'vue-apexcharts'

import { useDashboardStore } from '@/store/dashboard'
import chartOptions from './use/chartOptions'

export default {
  name: 'DashboardChart',
  components: {
    VueApexCharts
  },
  setup() {
    const dashboardStore = useDashboardStore()
    let year = []
    for (let i = 0; i < 11; i++) {
      year.push(new Date().getFullYear() - i)
    }

    const chart = computed(() => dashboardStore?.state?.chart)
    const seriesDataChart = computed(
      () => chart?.value?.seriesData?.filter?.((item) => item.checked) ?? false
    )

    watch(
      () => seriesDataChart.value,
      (newVal) => {
        setSeriesData(newVal)
        setOptions(chart.value)
      }
    )

    const {
      options,
      seriesData,
      setOptions,
      setSeriesData
    } = chartOptions()

    onMounted(() => {
      if (chart.value) {
        setOptions(chart.value)
        setSeriesData(seriesDataChart.value)
      }
    })

    const onChangeYear = (val) => {
      dashboardStore.changeYear(val)
    }

    return {
      year,
      options,
      seriesData,
      onChangeYear
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
