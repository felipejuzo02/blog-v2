<template>
  <div>Testando authors</div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthorsStore } from '../../stores/modules/authors'

export default {
  created() {
    this.teste()
  },
  methods: {
    ...mapActions(useAuthorsStore, {
      teste: 'fetchAuthors'
    })
  }
}
</script>