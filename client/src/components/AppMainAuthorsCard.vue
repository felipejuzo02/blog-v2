<template>
  <div class="app-main-authors-card flex items-center justify-between">
    <div class="flex items-center">
      <q-avatar 
        class="app-main-authors-card__image"
      >
        <q-img
          src="../assets/Kayla-Person.jpg"
          alt="Imagem do autor"
        />
      </q-avatar>
  
      <div class="app-main-authors-card__info q-ml-sm">
        <p>Nome do autor</p>
        <span>Quantidade de postagens</span>
      </div>
    </div>

  
    <q-icon
      class="cursor-pointer"
      color="grey-3"
      name="favorite"
      size="24px"
      @click="handleFavoriteAuthor"
    />
  </div>
</template>

<script>
export default {
  name: 'AppMainAuthorsCard',

  methods: {
    handleFavoriteAuthor () {
      console.log('handleFavoriteAuthor')
    }
  }
}
</script>

<style lang="scss">
.app-main-authors-card {
  &__image {
    width: 60px;
    height: 60px;
    background-color: red;
  }

  &__info {
    & p {
      font-weight: 600;
    }

    & span {
      font-size: 1.2rem;
      color: $grey-7;
    }
  }
}
</style>