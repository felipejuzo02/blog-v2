<template>
  <main class="page-categories-form container q-py-xl">
    <app-header-pages
      :title="title"
      :breadcrumbs="breadcrumbs"
    />

    <div>
      <app-form-generator
        :fields="fields"
        :mode="mode"
        entity="categories"
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
        { label: 'Categoria', name: 'name', type: 'text' },
        { label: 'Descrição', name: 'description', type: 'text' }
      ]
    },

    mode () {
      return this.isEditMode ? 'edit' : 'create'
    },

    isEditMode () {
      return this.$route.params?.id
    },

    title () {
      return this.isEditMode ? 'Editar categoria' : 'Criar categoria'
    },

    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Categorias', route: 'CategoriesList' },
        { label: this.title },
      ]
    }
  }
}
</script>