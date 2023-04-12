import { defineStore } from "pinia";
import axios from "axios";

import { Notify } from 'quasar'

export const useAuthorsStore = defineStore('authorsStore', {
  state: () => ({
    authors: [],
    author: {}
  }),

  actions: {
    async fetchAuthors () {
      const { data } = await axios.get('/authors')
      
      this.authors = data
    },

    async fetchAuthor (id) {
      try {
        const { data } = await axios.get(`/authors/${id}`)

        this.author = data
      } catch {
        throw error
      }
    },

    async editAuthor(id, payload) {
      try {
        await axios.put(`/authors/${id}`, payload)

        Notify.create({
          message: 'Autor editado com sucesso!',
          icon: 'done'
        })
      } catch {
        throw error
      }
    },

    async deleteAuthor({ id }) {
      try {
        await axios.delete(`/authors/${id}`)

        Notify.create({
          message: 'Autor deletado com sucesso!',
          icon: 'done'
        })
      } catch (error) {
        throw error
      }
    },

    async createAuthor(payload) {
      try {
        await axios.post('/authors', payload)

        Notify.create({
          message: 'Autor criado com sucesso!',
          icon: 'done'
        })
      } catch (error) {
        throw error
      }
    }
  }
})