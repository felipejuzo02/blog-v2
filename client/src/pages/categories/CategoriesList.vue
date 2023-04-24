<template>
  <main class="page-authors-list container q-py-xl">
    <app-header-pages
      title="Categorias"
      :breadcrumbs="breadcrumbs"
    >
      <template #actions>
        <app-button
          label="Nova categoria"
          @click="$router.push({ name: 'CategoriesCreate'})"
        />
      </template>
    </app-header-pages>

    <app-table-generator
      :rows="rows"
      :columns="columns"
    />
  </main>
</template>

<script>
import AppHeaderPages from 'src/components/AppHeaderPages.vue'
import AppButton from 'src/components/AppButton.vue'
import AppTableGenerator from 'src/components/AppTableGenerator.vue'

import { mapState, mapActions } from 'pinia'
import { useCategoriesStore } from '../../stores/modules/categories'
export default {
  name: 'CategoriesList',

  components: {
    AppHeaderPages,
    AppButton,
    AppTableGenerator
  },

  computed: {
    ...mapState(useCategoriesStore, ['categories']),

    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Categorias' },
      ]
    },

    columns () {
      console.log('this.', this.categories)
      return [
        {
          name: 'name',
          label: 'Categoria',
          field: 'name',
          align: 'left'
        },
        {
          name: 'description',
          label: 'Descrição',
          field: 'description',
          align: 'left'
        },
        {
          name: 'created_at',
          label: 'Criado em',
          field: 'created_at',
          align: 'left'
        },
      ]
    },

    rows () {
      return [
        {
          name: 'Categoria 1',
          description: 'Descrição categoria 1',
          created_at: 'Criado em ...'
        },
      ]
    }
  },

  created() {
    this.fetchAuthors()
  },

  methods: {
    ...mapActions(useCategoriesStore, ['fetchAuthors'])
  }
}
</script>