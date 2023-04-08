<template>
  <main class="container q-py-xl">
    <app-header-pages
      title="Postagens"
      :breadcrumbs="breadcrumbs"
    >
      <template #actions>
        <app-button
          label="Novo post"
          @click="$router.push({ name: 'PostsCreate'})"
        />
      </template>
    </app-header-pages>

    <app-post-card :content="contentCard" />
  </main>
</template>

<script>
import AppPostCard from '../../components/AppPostCard.vue'
import AppHeaderPages from 'src/components/AppHeaderPages.vue';
import AppButton from 'src/components/AppButton.vue';

export default {
  components: {
    AppPostCard,
    AppHeaderPages,
    AppButton
  },

  computed: {
    breadcrumbs () {
      return [
        { label: 'Home', route: 'Root' },
        { label: 'Postagens' },
      ]
    },

    contentCard () {
      return {
        title: 'A tecnologia sob demanda nas universidades',
        subtitle: 'Lorem Ipsun has been the industrie, when i see the vacation on the mind',
        createdAt: '26 jan, 2024',
        tags: [
          'Tecnologia',
          'Novidades'
        ]
      }
    }
  }
}
</script>