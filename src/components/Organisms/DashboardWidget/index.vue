<template>
  <div class="dashboard-widget">
    <div class="dashboard-widget__filter">
      <div class="filter-month">
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          bottom
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              append-icon="mdi-calendar"
              readonly
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="date"
            type="month"
            no-title
            scrollable
            @input="menu = false"
          />
        </v-menu>
      </div>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-if="isLoading"
          class="w-full"
          type="card"
        />
        <DashboardWidgetItem
          v-else
          title="New Leads"
          :landing-page="landingPage"
          amount="1.875"
          percentage="50"
          type="new"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-if="isLoading"
          class="w-full"
          type="card"
        />
        <DashboardWidgetItem
          v-else
          title="Visit/Meeting"
          :landing-page="landingPage"
          amount="2.000"
          percentage="50"
          type="visit"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <v-skeleton-loader
          v-if="isLoading"
          class="w-full"
          type="card"
        />
        <DashboardWidgetItem
          v-else
          title="Deal"
          :landing-page="landingPage"
          amount="10.000K"
          rate-code="IDR"
          percentage="50"
          type="deal"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import queryString from 'query-string'
import store from 'store'

import DashboardWidgetItem from '@/components/Atoms/DashboardWidgetItem'
import { useLandingPageStore } from '@/store/landing-page'

export default {
  name: 'DashboardWidget',
  components: {
    DashboardWidgetItem
  },
  setup() {
    const landingPageStore = useLandingPageStore()

    const id = computed(() => store.get('session').id)
    const landingPage = computed(() => landingPageStore.state.landingPage.data)

    const date = ref(new Date().toISOString().substr(0, 7))
    const menu = ref(false)
    const query = ref({
      search: '',
      perPage: 25,
      page: 1,
      sortBy: 'id',
      sortDesc: true,
      user_id: id.value
    })
    const isLoading = ref(false)

    onMounted(() => {
      fetchApi()
    })

    const fetchApi = () => {
      const params = queryString.stringify(query.value)
      landingPageStore.fetchLandingPage({
        params,
        preload: (loading) => {
          isLoading.value = loading
        }
      })
    }

    return {
      landingPage,
      isLoading,
      date,
      menu
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
