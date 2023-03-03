import { ref } from 'vue'

export default function chartOptions() {
  const options = ref({
    colors: [],
    chart: {
      id: 'dashboard-lp-chart',
      stacked: false,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      selection: {
        enabled: false
      }
    },
    markers: {
      size: 3,
      shape: 'circle',
      showNullDataPoints: true
    },
    yaxis: {
      show: true,
      min: 0,
      tickAmount: 5
    },
    xaxis: {
      categories: [],
      tooltip: {
        enabled: false
      }
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      x: {
        show: true
      },
      followCursor: true,
      onDatasetHover: {
        highlightDataSeries: false
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
        highlightDataSeries: false
      }
    },
    noData: {
      text: 'Data is not available',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#8b8da3',
        fontSize: '16px'
      }
    }
  })
  const seriesData = ref({
    data: []
  })

  const setOptions = (data) => {
    const colors = []
    data?.seriesData?.forEach?.((item) => {
      if (item.checked) {
        colors.push(item.color)
      }
    })
    const categories = data.month ?? []

    options.value = {
      ...options.value,
      colors: colors ?? [],
      xaxis: {
        ...options.value.xaxis,
        categories: categories
      }
    }
  }
  const setSeriesData = (data) => {
    let seriesDataFormat = []
    data?.forEach?.((item) => {
      seriesDataFormat.push({
        name: item.name,
        data: item.data,
        type: item.type
      })
    })

    seriesData.value = {
      data: seriesDataFormat ?? []
    }
  }

  return {
    options,
    seriesData,
    setOptions,
    setSeriesData
  }
}
