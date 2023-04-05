<template>
  <q-input
    v-bind="$attrs"
    ref="input"
    v-model="model"
    class="app-input full-width"
    color="primary"
    :error="error"
    :error-message="errorMessage"
    label-color="dark"
    no-error-icon
  >
    <template
      v-for="(_, name) in $slots"
      #[name]="context"
    >
      <slot
        :name="name"
        v-bind="context || {}"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'AppInput',

  inheritAttrs: false,

  props: {
    error: {
      type: Boolean
    },

    errorMessage: {
      type: String,
      default: ''
    },

    modelValue: {
      default: '',
      type: [String, Number]
    },

    icon: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  data () {
    return {
      mask: ''
    }
  },

  computed: {
    model: {
      get () {
        return this.modelValue
      },

      set (value) {
        return this.$emit('update:modelValue', value)
      }
    },

    iconColor () {
      return this.error ? 'negative' : 'dark'
    }
  }
}
</script>

