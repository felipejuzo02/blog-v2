<template>
  <q-layout class="main-layout">
    <app-header />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'src/components/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px $grey-3; 
  border-radius: 14px;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: $secondary;
}
</style>