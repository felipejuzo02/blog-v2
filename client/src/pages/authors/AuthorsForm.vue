<template>
  <main class="page-authors-form container q-py-xl">
    <app-header-pages
      :title="title"
      :breadcrumbs="breadcrumbs"
    />

    <div>
      <app-form-generator
        :fields="fields"
        entity="authors"
      />
    </div>
  </main>
</template>

<script>
import AppHeaderPages from 'src/components/AppHeaderPages.vue';
import AppFormGenerator from 'src/components/AppFormGenerator.vue'

export default {
  name: 'AuthorsForm',

  components: {
    AppFormGenerator,
    AppHeaderPages,
  },

  computed: {
    fields () {
      return [
        { label: 'Nome do autor', name: 'name', type: 'text' },
        { label: 'E-mail', name: 'email', type: 'text' }
      ]
    },

    isEditMode () {
      return this.$route.params?.id
    },

    title () {
      return this.isEditMode ? 'Editar autor' : 'Criar autor'
    },

    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Autores', route: 'AuthorsList' },
        { label: this.title },
      ]
    }
  }
}
</script>