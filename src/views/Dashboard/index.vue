<template>
  <TemplateDefault>
    <div class="dashboard">
      <h1 class="dashboard-header">
        Hi {{ username }}, good to see you
      </h1>
      <DashboardWidget />
      <DashboardChart />
      <DashboardSummary />
    </div>
  </TemplateDefault>
</template>

<script>
import { computed } from 'vue'
import store from 'store'

import TemplateDefault from '@/components/Templates/TemplateDefault'
import DashboardWidget from '@/components/Organisms/DashboardWidget'
import DashboardChart from '@/components/Molecules/DashboardChart'
import DashboardSummary from '@/components/Molecules/DashboardSummary'

export default {
  name: 'DashboardPage',
  components: {
    TemplateDefault,
    DashboardWidget,
    DashboardChart,
    DashboardSummary
  },
  setup() {
    const username = computed(() => store.get('session').name)
    const breadcrumbs = [
      {
        text: 'Dashboard',
        href: 'dashboard'
      }
    ]

    return {
      username,
      breadcrumbs
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
