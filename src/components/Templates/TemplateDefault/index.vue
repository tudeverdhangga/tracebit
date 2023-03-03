<template>
  <div>
    <TheNavbar :breadcrumbs="breadcrumbs" />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/Organisms/TheNavbar'
import TheFooter from '@/components/Atoms/TheFooter'

export default {
  name: 'TemplateDefault',
  components: {
    TheNavbar,
    TheFooter
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
