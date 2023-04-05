<template>
  <q-form @submit="onSubmit">
    <component
      :is="componentTag(field)"
      v-bind="attributes(field)"
      v-for="(field, index) in fields"
      :key="index"
      v-model="values[field.name]"
    />

    <div class="row">
      <app-button
        type="submit"
        label="Salvar"
      />
    </div>
  </q-form>
</template>

<script>
import AppInput from 'src/components/AppInput.vue';
import AppSelect from 'src/components/AppSelect.vue';
import AppButton from './AppButton.vue';

export default {
  name: 'AppFormGenerator',

  components: {
    AppInput,
    AppButton,
    AppSelect
  },

  props: {
    fields: {
      type: Array,
      default: () => ([])
    },

    errors: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      values: {},
      errorsData: {}
    }
  },

  computed: {
    componentType () {
      return {
        text: 'app-input',
        select: 'app-select'
      }
    }
  },

  methods: {
    onSubmit() {
      console.log('this.values', this.values)
    },

    componentTag (field) {
      const { type } = field

      return this.componentType[type]
    },

    attributes (field) {
      const { label, name, type } = field

      return {
        label,
        name,
        options: type === 'select' && field.options
      }
    }
  }
}
</script>