<template>
  <div class="container">
    teste {{ count }}
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useHomeStore } from '../stores/modules/home'

export default {
  computed: {
    // ...mapState(useHomeStore, ['counter']),
    ...mapState(useHomeStore, {
      count: store => `Quanto tem aq?? ${store.counter}`
    })
  }
}
</script>