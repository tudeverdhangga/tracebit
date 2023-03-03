<template>
  <div class="dashboard-widget__item">
    <v-card
      class="item-card"
      outlined
      :style="`
        border-left: 10px solid ${
        type === 'new'
          ? '#03C3FF'
          : type === 'visit'
            ? '#8EFFA0'
            : '#C08EFF'
      }
      `"
    >
      <div class="item-card__heading">
        <p class="heading-title">
          {{ title }}
        </p>
        <v-combobox
          v-model="selectedLandingPage"
          class="heading-landing-page"
          :items="landingPageList"
          dense
        />
      </div>
      <div class="item-card__amount">
        <div class="amount-total">
          <span class="amount-total__rate-code">
            {{ rateCode }}
          </span>
          {{ amount }}
        </div>
        <p class="amount-increase">
          <v-icon>mdi-triangle-small-up</v-icon>
          {{ percentage }}% from previous month
        </p>
      </div>
      <v-checkbox
        class="item-card__checkbox"
        input-value="true"
        @change="changeSelectedWidget(type, $event)"
      />
    </v-card>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

import { useDashboardStore } from '@/store/dashboard'

export default {
  name: 'DashboardWidgetItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    landingPage: {
      type: Array,
      default: () => []
    },
    amount: {
      type: String,
      default: '0'
    },
    rateCode: {
      type: String,
      default: ''
    },
    percentage: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'new'
    }
  },
  setup(props) {
    const dashboardStore = useDashboardStore()

    const selectedLandingPage = ref({
      text: 'All',
      value: ''
    })

    const landingPageList = computed(() => {
      let options = [{
        text: 'All',
        value: ''
      }]
      const landingPage = props.landingPage

      landingPage?.forEach((item) => {
        options.push({
          text: item.label,
          value: item.uuid
        })
      })

      return options
    })

    const changeSelectedWidget = (type, isChecked) => {
      const types = ['new', 'visit', 'deal']
      const index = types.indexOf(type)
      dashboardStore.changeCheckedWidget(index, isChecked)
    }

    return {
      selectedLandingPage,
      landingPageList,
      changeSelectedWidget
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
