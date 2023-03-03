import { ref, computed } from 'vue'
import { debounce } from 'lodash'
import queryString from 'query-string'
import store from 'store'

import { useFormsStore } from '@/store/forms'

export default function getForms() {
  const formsStore = useFormsStore()

  const id = computed(() => store.get('session').id)
  const forms = computed(() => formsStore.state.forms.data)
  const meta = computed(() => formsStore.state.forms.meta)

  const query = ref({
    search: '',
    perPage: 25,
    page: 1,
    sortBy: 'id',
    sortDesc: true,
    user_id: id.value
  })
  const isLoading = ref(true)

  const fetchApi = () => {
    const params = queryString.stringify(query.value)
    formsStore.fetchForms({
      params,
      preload: (loading) => {
        isLoading.value = loading
      }
    })
  }
  const onSearchForm = debounce((value) => {
    query.value.search = value
    fetchApi()
  }, 500)

  return {
    forms,
    meta,
    query,
    isLoading,
    fetchApi,
    onSearchForm
  }
}
