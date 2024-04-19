import { defineStore } from "pinia";

export const usePersonStore = defineStore({
  id: "person",
  state: () => ({
    isAuth: false,
    person: {
      name: "Алексей",
    },
  }),
});
