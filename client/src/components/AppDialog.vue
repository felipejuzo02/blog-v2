<template>
  <q-dialog
    ref="dialog"
    class="app-dialog"
    :persistent="persistent"
    :position="position"
  >
    <q-card
      class="q-px-lg"
      :class="cardClass"
    >
      <slot name="header">
        <q-card-section class="q-mb-lg">
          <h3>{{ content.title }}</h3>
          <p v-if="content.subtitle">
            {{ content.subtitle }}
          </p>
        </q-card-section>
      </slot>

      <slot />

      <slot name="actions">
        <q-card-actions class="column full-width items-center q-gutter-md q-mt-xl">
          <app-button
            color="primary"
            label="Continuar"
            @click="onOKClick"
          />
        </q-card-actions>
      </slot>
    </q-card>
  </q-dialog>
</template>

<script>
import AppButton from './AppButton.vue'

export default {
  name: 'AppDialog',

  components: {
    AppButton
  },

  props: {
    persistent: {
      type: Boolean,
      default: true
    },

    content: {
      type: Object,
      default: () => ({})
    }
  },

  emits: ['ok'],

  computed: {
    position () {
      return this.$q.screen.lt.sm ? 'bottom' : undefined
    },

    cardClass () {
      return !this.$q.screen.lt.sm && 'text-center column items-center'
    }
  },

  methods: {
    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
    },

    onOKClick () {
      this.$emit('ok')

      this.hide()
    }
  }
}
</script>

<style lang="scss">
.app-dialog {
  .q-card {
    border-radius: 12px
  }
}
</style>
