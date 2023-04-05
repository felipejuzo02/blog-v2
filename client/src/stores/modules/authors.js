import { defineStore } from "pinia";
import axios from "axios";

import { Notify } from 'quasar'

export const useAuthorsStore = defineStore('authorsStore', {
  state: () => ({
    authors: []
  }),

  actions: {
    async fetchAuthors () {
      const { data } = await axios.get('http://localhost:3333/authors')
      
      this.authors = data
    },

    async deleteAuthor({ id }) {
      try {
        await axios.delete(`http://localhost:3333/authors/${id}`)

        Notify.create({
          message: 'Autor deletado com sucesso!',
          icon: 'done'
        })
      } catch (error) {
        console.log('deu um erro')
      }
    }
  }
})