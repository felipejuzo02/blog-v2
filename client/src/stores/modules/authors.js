import { defineStore } from "pinia";
import axios from "axios";

export const useAuthorsStore = defineStore('authorsStore', {
  state: () => {
    authors: []
  },

  actions: {
    async fetchAuthors () {
      const authors = await axios.get('http://localhost:3333/authors')
      
      console.log(authors)
    }
  }
})