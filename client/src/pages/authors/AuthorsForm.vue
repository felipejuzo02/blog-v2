<template>
  <main class="page-authors-form container q-py-xl">
    <div class="row items-center justify-between q-mb-md">
      <h2 class="text-h2">
        Criar autor
      </h2>

      <app-button label="Novo autor" />
    </div>
    
    <div>
      <app-form-generator :fields="fields" />
    </div>
  </main>
</template>

<script>
import AppButton from 'src/components/AppButton.vue'
import AppFormGenerator from 'src/components/AppFormGenerator.vue'

export default {
  name: 'AuthorsForm',

  components: {
    AppButton,
    AppFormGenerator
  },

  computed: {
    fields () {
      return [
        { label: 'Nome do autor', name: 'name', type: 'text' },
        { label: 'E-mail', name: 'email', type: 'text' },
        { label: 'Teste', name: 'teste', type: 'select', options: [{label: 'label', value: 'value'}] },
      ]
    }
  }
}
</script>