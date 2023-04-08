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
import AppHeaderPages from 'src/components/AppHeaderPages.vue'

export default {
  components: {
    AppAuthorCard,
    AppButton,
    AppHeaderPages
  },

  computed: {
    ...mapState(useAuthorsStore, ['authors']),

    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Autores' },
      ]
    }
  },

  created() {
    this.fetchAuthors()
  },

  methods: {
    ...mapActions(useAuthorsStore, ['fetchAuthors'])
  }
}
</script>
