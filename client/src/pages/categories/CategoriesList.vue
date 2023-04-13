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
  </main>
</template>

<script>
import AppHeaderPages from 'src/components/AppHeaderPages.vue'
import AppButton from 'src/components/AppButton.vue'

export default {
  name: 'CategoriesList',

  components: {
    AppHeaderPages,
    AppButton
  },

  computed: {
    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Categorias' },
      ]
    }
  }
}
</script>