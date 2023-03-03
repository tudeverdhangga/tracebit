<template>
  <div class="table-heading">
    <div class="table-heading__description">
      <div class="description-title">
        {{ title }}
      </div>
      <div class="description-page">
        {{ description }}
      </div>
    </div>
    <v-spacer />
    <div class="table-heading__action">
      <v-text-field
        class="action-search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        outlined
        dense
        @input="onSearchForm($event)"
      />
      <v-btn
        class="action-create"
        color="primary"
        @click="$emit('create')"
      >
        Create New
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTableHeading',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  setup(_, { emit }) {
    const onSearchForm = (value) => {
      emit('search', value)
    }

    return { onSearchForm }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
