import { ref } from 'vue'

export default function useColumns() {
  const columns = ref([
    {
      text: 'TITLE',
      align: 'start',
      value: 'title'
    },
    // {
    //   text: 'LANDING PAGE',
    //   align: 'start',
    //   value: 'title'
    // },
    {
      text: 'CREATOR',
      align: 'start',
      value: 'creator'
    },
    {
      text: 'DATE',
      align: 'start',
      value: 'date'
    },
    {
      text: 'ACTIONS',
      align: 'center',
      value: 'actions',
      sortable: false
    }
  ])

  return { columns }
}
