<template>
  <TemplateDefault :breadcrumbs="breadcrumbs">
    <div class="form">
      <TheTableHeading
        title="Form"
        description="By embedding the Form on the Landing Page, you can have lead submissions from the visitors. You can not edit a form once it has been submitted by a visitor."
        :search="search"
        @create="onCreateForm"
        @search="onSearchForm"
      />
      <v-card
        class="form__table"
        outlined
      >
        <v-data-table
          :headers="columns"
          :items="forms"
          :search="search"
          :loading="isLoading"
        >
          <template #[`item.title`]="{ item }">
            <a href="#">{{ item.title }}</a>
          </template>
          <template #[`item.creator`]="{ item }">
            {{ item.creator.name }}
          </template>
          <template #[`item.date`]="{ item }">
            {{ helper.formatDate(item.created_at) }}
          </template>
          <template #[`item.actions`]="{ item }">
            <v-menu
              bottom
              right
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list class="action-table">
                <v-list-item @click="onPreviewForm(item)">
                  <v-icon left>
                    mdi-file-find-outline
                  </v-icon>
                  Preview
                </v-list-item>
                <v-list-item @click="onEmbedCodeForm(item)">
                  <v-icon left>
                    mdi-xml
                  </v-icon>
                  Embed Code
                </v-list-item>
                <v-list-item @click="onDeleteForm(item)">
                  <v-icon left>
                    mdi-trash-can-outline
                  </v-icon>
                  Delete
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </TemplateDefault>
</template>

<script>
import { onMounted } from 'vue'

import TemplateDefault from '@/components/Templates/TemplateDefault'
import TheTableHeading from '@/components/Organisms/TheTableHeading'
import getForms from './use/getForms'
import useColumns from './use/columns'
import helper from '@/utils/helper'

export default {
  name: 'FormPage',
  components: {
    TemplateDefault,
    TheTableHeading
  },
  setup() {
    const {
      forms,
      meta,
      query,
      isLoading,
      fetchApi,
      onSearchForm
    } = getForms()
    const { columns } = useColumns()
    const breadcrumbs = [
      {
        text: 'Form',
        href: 'form'
      }
    ]

    onMounted(() => {
      fetchApi()
    })

    const onCreateForm = () => {
      console.log('create')
    }
    const onPreviewForm = (form) => {
      console.log('preview', form)
    }
    const onEmbedCodeForm = (form) => {
      console.log('embed', form)
    }
    const onDeleteForm = (form) => {
      console.log('delete', form)
    }

    return {
      helper,
      forms,
      columns,
      meta,
      query,
      isLoading,
      breadcrumbs,
      onCreateForm,
      onSearchForm,
      onPreviewForm,
      onEmbedCodeForm,
      onDeleteForm
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
