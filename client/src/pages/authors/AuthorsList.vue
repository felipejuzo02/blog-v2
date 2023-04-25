<template>
  <main class="page-authors-list container q-py-xl">
    <app-header-pages
      title="Autores"
      :breadcrumbs="breadcrumbs"
    >
      <template #actions>
        <app-button
          label="Novo autor"
          @click="$router.push({ name: 'AuthorsCreate'})"
        />
      </template>
    </app-header-pages>
    
    <app-table-generator
      :rows="authorsList"
      :columns="columns"
    />
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthorsStore } from '../../stores/modules/authors'

import AppButton from 'src/components/AppButton.vue'
import AppHeaderPages from 'src/components/AppHeaderPages.vue'
import AppTableGenerator from 'src/components/AppTableGenerator.vue'

export default {
  components: {
    AppButton,
    AppHeaderPages,
    AppTableGenerator
  },

  data () {
    return {
      authorsList: []
    }
  },

  computed: {
    ...mapState(useAuthorsStore, ['authors']),

    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Autores' },
      ]
    },

    columns () {
      return [
        {
          name: 'name',
          label: 'Autor',
          field: 'name',
          align: 'left'
        },
        {
          name: 'email',
          label: 'E-mail',
          field: 'email',
          align: 'left'
        },
      ]
    }
  },

  async created() {
    await this.fetchAuthors()

    this.setData()
  },

  methods: {
    ...mapActions(useAuthorsStore, ['fetchAuthors']),

    setData () {
      this.authorsList = [...this.authors]
    }
  }
}
</script>
