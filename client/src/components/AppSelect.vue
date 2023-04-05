<template>
  <q-select
    v-model="model"
    class="app-select full-width"
    dropdown-icon="expand_more"
    emit-value
    label="Standard"
    label-color="dark"
    map-options
    :options="options"
  >
    <template #no-option>
      <div class="q-py-xl text-center text-grey">
        Nenhum opção disponível...
      </div>
    </template>

    <template #option="scope">
      <q-item
        v-bind="scope.itemProps"
        class="app-select__item q-mt-md"
      >
        {{ scope.opt.label }}
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  name: 'AppSelect',

  inheritAttrs: false,

  props: {
    modelValue: {
      type: [Object, String, Number],
      default: ''
    },

    options: {
      type: Array,
      default: () => []
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
  },

  methods: {
    hasNextOption ({ index }) {
      const lastOptionIndex = this.options?.length - 1

      return index !== lastOptionIndex
    }
  }
}
</script>

<style lang="scss">
.app-select {
  position: relative;

  &__item:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 1rem;
    right: 1rem;
    height: 1px;
    bottom: 0;
    background-color: grey;
  }
}
</style>
