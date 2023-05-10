<template>
  <q-card class="app-news-blog q-px-xl q-py-md">
    <q-card-section class="text-white">
      <h3 class="app-news-blog__title q-my-sm">
        Uma atualização do Blog chegou.
      </h3>
      <p class="app-news-blog__subtitle">
        Novo layout com um backend real e funcional.
      </p>
    </q-card-section>
    
    <q-img
      class="app-news-blog__image"
      src="../assets/news.svg"
    />
  </q-card>
</template>

<script>
export default {
  name: 'AppNewsBlog'
}
</script>

<style lang="scss">
.app-news-blog {
  background: linear-gradient(180deg, #6E98C9 0%, #5580B3 100%);
  border-radius: 12px;
  position: relative;

  &__title {
    font-size: 3.2rem;
    font-weight: 700;
  }

  &__image {
    width: 200px;
    position: absolute;
    right: 48px;
    bottom: 0;
  }
}
</style>