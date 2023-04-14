<template>
  <q-input
    v-model="model"
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
</template>

<script>
export default {
  name: 'AppSearchInput',

  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },

  emits: ['update:modelValue'],

  computed: {
    model: {
      get () {
        return this.modelValue
      },

      set (value) {
        return this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>