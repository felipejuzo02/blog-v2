<template>
  <q-layout>
    <q-page-container class="blank-layout">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.blank-layout {
  background-color: rgb(144, 151, 252);
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
}
</style>