<template>
  <q-layout class="main-layout">
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
  
        <nav class="flex items-center q-gutter-lg justify-center">
          <q-list class="flex justify-center">
            <p
              class="q-mr-lg main-layout__nav-item"
              @click="$router.push({ name: 'PostsList' })"
            >
              Postagens
            </p>
            <p
              class="q-mr-lg main-layout__nav-item"
              @click="$router.push({ name: 'AuthorsList' })"
            >
              Autores
            </p>
            <p
              class="q-mr-md main-layout__nav-item"
              @click="$router.push({ name: 'AboutSingle' })"
            >
              Sobre
            </p>
          </q-list>

          <q-input
            v-model="search"
            type="text"
            color="grey-3"
            standout="bg-grey-3 text-grey-3"
            dense
            filled
          >
            <template #append>
              <q-icon name="search" />
            </template>
          </q-input>
        </nav>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
}
</script>

<style lang="scss">
.main-layout {
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