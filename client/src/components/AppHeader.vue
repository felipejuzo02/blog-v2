<template>
  <q-header
    elevated
    class="bg-grey-1 text-black q-py-md"
  >
    <div class="container flex items-center justify-between">
      <h2
        class="text-h1 cursor-pointer"
        @click="$router.push({ name: 'Root' })"
      >
        Blog v2
      </h2>

      <nav class="flex items-center relative-position">
        <q-list class="flex justify-center q-gutter-lg">
          <p
            v-for="(item, index) in menuItems"
            :key="index"
            class="app-header__nav-item"
            @click="$router.push({ name: item.route })"
          >
            {{ item.name }}
          </p>
        </q-list>

        <div class="separator q-mx-md" />

        <app-header-actions />
      </nav>
    </div>
  </q-header>
</template>

<script>
import AppHeaderActions from './AppHeaderActions.vue';

export default {
  name: 'AppHeader',

  components: {
    AppHeaderActions
  },

  computed: {
    menuItems () {
      return [
        { name: 'Postagens', route: 'PostsList' },
        { name: 'Categorias', route: 'CategoriesList' },
        { name: 'Autores', route: 'AuthorsList' },
        { name: 'Sobre', route: 'AboutSingle' }
      ]
    }
  }
}
</script>

<style lang="scss">
.separator {
  width: 1px;
  height: 24px;
  background-color: $grey-5;
}

.app-header {
  &__nav-item {
    cursor: pointer;
    color: $grey-7;
    font-size: 1.6rem;

    &:hover {
      color: $primary;
    }
  }
}
</style>