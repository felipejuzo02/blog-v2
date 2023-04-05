<template>
  <q-card class="app-author-card flex items-center justify-between cursor-pointer">
    <q-card-section class="flex items-center">
      <q-avatar
        color="grey-4"
        text-color="grey-8"
        class="q-mr-md"
      >
        {{ getInitials }}
      </q-avatar>

      <div>
        <p>{{ content.name }}</p>
        <p>{{ content.email }}</p>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn
        icon="more_vert"
        flat
        round
      >
        <q-menu>
          <q-list>
            <q-item
              v-close-popup
              clickable
            >
              <q-item-section>
                Editar autor
              </q-item-section>
            </q-item>
            <q-item
              v-close-popup
              clickable
            >
              <q-item-section
                class="text-negative"
                @click="onDeleteAuthor"
              >
                Excluir autor
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthorsStore } from '../stores/modules/authors'

export default {
  name: 'AppAuthorCard',

  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    getInitials () {
      const { name } = this.content

      return name[0].toUpperCase()
    }
  },

  methods: {
    ...mapActions(useAuthorsStore, ['deleteAuthor', 'fetchAuthors']),

    async onDeleteAuthor () {
      try {
        await this.deleteAuthor(this.content)
        await this.fetchAuthors()
      } catch (error) {
        console.log('deu erro')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-author-card {
  width: 100%;
}
</style>