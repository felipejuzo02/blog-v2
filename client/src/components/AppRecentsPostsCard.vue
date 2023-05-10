<template>
  <div class="app-recents-posts-card">
    <q-img
      class="app-recents-posts-card__image"
      src="../assets/Kayla-Person.jpg"
    />

    <div class="app-recents-posts-card__info q-ml-sm">
      <p>Titulo da bagaça</p>
      <span>31, mar, 2022 - 19:31</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRecentsPostsCard'
}
</script>

<style lang="scss">
.app-recents-posts-card {
  display: flex;
  align-items: center;

  &__image {
    aspect-ratio: 16/9;
    width: 160px;
    border-radius: 16px;
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