<template>
  <div>Listagem de todos authors</div>
  <pre>{{ authors }}</pre>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthorsStore } from '../../stores/modules/authors'

export default {
  computed: {
    ...mapState(useAuthorsStore, ['authors'])
  },

  created() {
    this.fetchAuthors()
  },
  methods: {
    ...mapActions(useAuthorsStore, ['fetchAuthors'])
  }
}
</script>