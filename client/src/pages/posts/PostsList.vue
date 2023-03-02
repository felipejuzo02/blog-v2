<template>
  <main class="container q-py-xl">
    <h2 class="text-h2 q-mb-md">
      Artigos
    </h2>
    <app-post-card :content="contentCard" />
  </main>
</template>

<script>
import AppPostCard from '../../components/AppPostCard.vue'

export default {
  components: {
    AppPostCard
  },

  computed: { 
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