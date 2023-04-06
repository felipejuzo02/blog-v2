<template>
  <main class="page-authors-form container q-py-xl">
    <div class="row items-center justify-between q-mb-md">
      <h2 class="text-h2">
        Criar autor
      </h2>
    </div>
    
    <div>
      <app-form-generator
        :fields="fields"
        entity="authors"
      />
    </div>
  </main>
</template>

<script>
import AppFormGenerator from 'src/components/AppFormGenerator.vue'

export default {
  name: 'AuthorsForm',

  components: {
    AppFormGenerator
  },

  computed: {
    fields () {
      return [
        { label: 'Nome do autor', name: 'name', type: 'text' },
        { label: 'E-mail', name: 'email', type: 'text' }
      ]
    }
  }
}
</script>