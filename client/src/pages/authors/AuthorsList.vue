<template>
  <main class="page-authors-list container q-py-xl">
    <div class="row items-center justify-between q-mb-md">
      <h2 class="text-h2">
        Autores
      </h2>

      <app-button
        label="Novo autor"
        @click="$router.push({ name: 'AuthorsCreate'})"
      />
    </div>
    
    <div class="page-authors-list__list column q-gutter-xs">
      <app-author-card
        v-for="(author, index) in authors"
        :key="index"
        :content="author"
      />
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAuthorsStore } from '../../stores/modules/authors'

import AppAuthorCard from 'src/components/AppAuthorCard.vue'
import AppButton from 'src/components/AppButton.vue'

export default {
  components: {
    AppAuthorCard,
    AppButton
  },

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
