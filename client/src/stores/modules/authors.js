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
      const { data } = await axios.get('http://localhost:3333/authors')
      
      this.authors = data
    },

    async fetchAuthor (id) {
      try {
        const { data } = await axios.get(`http://localhost:3333/authors/${id}`)

        this.author = data
      } catch {
        throw error
      }
    },

    async editAuthor(id, payload) {
      try {
        console.log('bati aq')
        await axios.put(`http://localhost:3333/authors/${id}`, payload)

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
        await axios.delete(`http://localhost:3333/authors/${id}`)

        Notify.create({
          message: 'Autor deletado com sucesso!',
          icon: 'done'
        })
      } catch (error) {
        console.log('deu um erro')
        throw error
      }
    },

    async createAuthor(payload) {
      try {
        console.log(payload)
        await axios.post('http://localhost:3333/authors', payload)

        Notify.create({
          message: 'Autor criado com sucesso!',
          icon: 'done'
        })
      } catch {
        throw error
      }
    }
  }
})