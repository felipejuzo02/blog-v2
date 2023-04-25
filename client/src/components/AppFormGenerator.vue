<template>
  <q-form
    class="app-form-generator"
    @submit="onSubmit"
  >
    <component
      :is="componentTag(field)"
      v-bind="attributes(field)"
      v-for="(field, index) in fields"
      :key="index"
      v-model="values[field.name]"
    />
    <div
      v-if="isEditMode"
      class="text-grey-7 row justify-end"
    >
      Criado em {{ getCreatedAt }}.
    </div>

    <div class="row justify-end q-mt-lg">
      <app-button
        class="q-mr-md"
        label="Cancelar"
        variation="secondary"
        @click="$router.go(-1)"
      />
      <app-button
        :loading="loadingButton"
        type="submit"
        label="Salvar"
      />
    </div>
  </q-form>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthorsStore } from '../stores/modules/authors'
import { useCategoriesStore } from '../stores/modules/categories'

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
    },

    entity: {
      type: String,
      default: ''
    },

    mode: {
      type: String,
      default: 'create'
    }
  },

  data () {
    return {
      values: {},
      errorsData: {},
      loadingButton: false
    }
  },

  computed: {
    ...mapState(useAuthorsStore, ['author']),

    componentType () {
      return {
        text: 'app-input',
        select: 'app-select'
      }
    },

    getCreatedAt () {
      const formatedDate = new Date(this.values.created_at)
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return formatedDate.toLocaleDateString('pt-BR', options)
    },

    isEditMode () {
      return this.mode === 'edit'
    },

    id () {
      return this.$route.params?.id
    },

    submitActions () {
      return {
        authors: {
          edit: () => this.editAuthor(this.id, this.values),
          create: () => this.createAuthor(this.values)
        },

        categories: {
          create: () => this.createCategory(this.values)
        }
      }
    },

    routeToRedirect () {
      const formattedEntity = this.entity[0].toUpperCase() + this.entity.substring(1)

      return `${formattedEntity}List`
    }
  },

  async created () {
    await this.fetchEntity()
  },

  methods: {
    ...mapActions(useAuthorsStore, ['createAuthor', 'fetchAuthor', 'editAuthor']),
    ...mapActions(useCategoriesStore, ['createCategory']),

    async onSubmit() {
      try {
        this.loadingButton = true

        await this.handleActions()
        
        this.$router.push({ name: this.routeToRedirect })
      } catch (error){
        const { response: { data }} = error

        this.errorsData = data
      } finally {
        this.loadingButton = false
      }
    },

    async fetchEntity () {
      if (!this.isEditMode) return

      await this.fetchAuthor(this.id)
      this.setValues()
    },

    setValues () {
      // TODO: deixar dinamico a partir da entity
      this.values = Object.assign({}, this['author'])
    },

    async handleActions () {
      await this.submitActions[this.entity][this.mode]()
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
        error: !!this.errorsData[name],
        errorMessage: this.errorsData[name],
        options: type === 'select' && field.options
      }
    }
  }
}
</script>
