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