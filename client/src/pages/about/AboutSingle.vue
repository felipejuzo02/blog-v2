<template>
  <main class="page-authors-form container q-py-xl">
    <app-header-pages
      title="Sobre"
      :breadcrumbs="breadcrumbs"
    />
  </main>
</template>

<script>
import AppHeaderPages from 'src/components/AppHeaderPages.vue';

export default {
  name: 'AboutSingle',

  components: {
    AppHeaderPages
  },

  computed: {
    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Sobre' }
      ]
    }
  }
}
</script>