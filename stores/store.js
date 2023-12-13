import { defineStore } from 'pinia';

export const useAppState = defineStore('appState', {
  state: () => ({
    isRegisterVisible: false,
  }),
  actions: {
    showRegister() {
      this.isRegisterVisible = true;
    },
    hideRegister() {
      this.isRegisterVisible = false;
    },
  },
});