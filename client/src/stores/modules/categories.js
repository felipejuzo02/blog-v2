import { defineStore } from "pinia";
import axios from "axios";

// import { Notify } from 'quasar'

export const useCategoriesStore = defineStore('categoriesStore', {
  state: () => ({
    categories: ''
  }),

  actions: {
    async fetchAuthors () {
      const { data } = await axios.get('/categories')
      
      this.categories = data
    },
  }
})