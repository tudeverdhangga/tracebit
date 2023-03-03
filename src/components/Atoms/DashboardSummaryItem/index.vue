<template>
  <div class="dashboard-summary__item">
    <div class="item-title">
      {{ title }}
    </div>
    <v-card
      class="item-content"
      outlined
    >
      <div class="item-content__metrics">
        <p class="metrics-label">
          Metrics:
        </p>
        <div class="metrics-combobox">
          <v-combobox
            v-model="selectedMetrics"
            :items="metricOptions"
            dense
          />
        </div>
      </div>
      <div
        v-for="(item, index) in data"
        :key="`table-${index}`"
        class="item-content__table"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="flex">
              <span class="table-marketing-channel">
                {{ item.name || '-' }}
              </span>
              <v-spacer />
              <span class="table-submission">
                {{ item.visitor_count || '-' }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.landing_page || '-' }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </div>
      <div class="item-content__insight">
        <div class="insight-title">
          Insights
        </div>
        <div class="insight-desc">
          <p>In the last month, only  {{ insight.percentage || '-' }}%  of audience from  {{ insight.marketingChannel || '-' }}({{ insight.landingPage || '-' }}) made it to {{ insight.metrics || '-' }}.</p>
          <p>From last year, {{ insight.leadsMonth || '-' }} is the highest number of leads. And {{ insight.dealMonth || '-' }} is the highest number of Deals.</p>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DashboardSummaryItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    insight: {
      type: Object,
      default: () => null
    }
  },
  setup(props) {
    const metricOptions = [
      {
        text: 'Submission',
        value: 'submission'
      },
      {
        text: 'Visit/Meeting',
        value: 'visit'
      },
      {
        text: 'Deal',
        value: 'deal'
      }
    ]
    const selectedMetrics = ref({
      text: 'Submission',
      value: 'submission'
    })

    return {
      metricOptions,
      selectedMetrics
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
