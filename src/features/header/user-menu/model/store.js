import { defineStore } from "pinia";

export const useUserMenuStore = defineStore({
  id: "user-menu",

  state: () => ({
    menu: [
      { label: "Профиль", link: "/profile" },
      { label: "Выйти", action: "logout" },
    ],
  }),

  actions: {
    setMenu(newMenu) {
      this.menu = newMenu;
    },
  },
});
