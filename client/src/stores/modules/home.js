import { defineStore } from "pinia";

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    counter: 12,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
})