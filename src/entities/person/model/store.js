import { defineStore } from "pinia";
import avatarIMG from "@/assets/img/avatar.png";

export const usePersonStore = defineStore({
  id: "person",
  state: () => ({
    isAuth: false,
    person: {
      avatar: avatarIMG,
      name: "Алексей",
    },
  }),
});
