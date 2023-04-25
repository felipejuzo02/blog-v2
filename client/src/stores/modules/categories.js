import { defineStore } from "pinia";
import axios from "axios";

import { Notify } from 'quasar'

export const useCategoriesStore = defineStore('categoriesStore', {
  state: () => ({
    categories: ''
  }),

  actions: {
    async fetchCategories () {
      const { data } = await axios.get('/categories')
      
      this.categories = data
    },

    async createCategory(payload) {
      try {
        await axios.post('/categories', payload)

        Notify.create({
          message: 'Categoria criado com sucesso!',
          icon: 'done'
        })
      } catch (error) {
        throw error
      }
    }
  }
})