<template>
  <q-card
    class="app-post-card flex justify-between cursor-pointer"
    flat
    bordered
  >
    <q-card-section class="flex column app-post-card__informations">
      <div class="flex items-center">
        <div class="app-post-card__author-image q-mr-sm" />
        <p>Luis Felipe Juzo</p>
      </div>

      <h3 class="text-h3">
        {{ content.title }}
      </h3>

      <p class="app-post-card__subtitle">
        {{ content.subtitle }}
      </p>

      <div class="flex items-center">
        <p class="app-post-card__created-at q-mr-lg">
          {{ content.createdAt }}
        </p>

        <span
          v-for="(tag, index) in content.tags"
          :key="index"
          class="app-post-card__tag q-mr-xs"
        >{{ tag }}</span>
      </div>
    </q-card-section>

    <div class="app-post-card__image" />
  </q-card>
</template>

<script>
export default {
  name: 'AppPostCard',

  props: {
    content: {
      type: Object,
      default: () => ({}),
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-post-card {
  border-radius: 1.6rem;

  &:hover {
    background-color: $grey-1;
  }

  &__informations {
    gap: 2rem;
  }

  &__author-image {
    width: 3rem;
    height: 3rem;

    background-image: url('../assets/Kayla-Person.jpg');
    background-size: cover;
    background-position: center;

    border-radius: 50%;
  }

  &__created-at,
  &__subtitle {
    font-weight: 300;
    color: $grey-7;
  }

  &__image {
    width: 26rem;

    border-radius: 1.6rem !important;
    background-image: url('../assets/tec.png');
    background-size: cover;
    background-position: center;
  }

  &__tag {
    background-color: $grey-4;
    padding: 0 1.2rem;
    color: $grey-8;
    border-radius: 0.6rem;
  }
}
</style>