<template>
  <q-btn
    v-bind="$attrs"
    class="app-button fit"
    padding="13px"
    rounded
    size="14px"
    unelevated
  >
    <template #loading>
      <div class="spinner">
        <q-icon
          name="rotate_right"
          size="28px"
        />
      </div>
    </template>
  </q-btn>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style lang="scss">
.app-button {
  max-width: 200px;
  background-color: $primary;
  color: white;

  &:hover {
    background-color: $hover;
  }

  &:disabled {
    background-color: red;
    color: white;
  }
}

.spinner {
  animation: spinnerAnimation 1s infinite normal;
}

@keyframes spinnerAnimation {
  to {
    transform: rotate(360deg);
  }
}
</style>
