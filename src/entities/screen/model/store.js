import { defineStore } from "pinia";

export const useScreenStore = defineStore({
  id: "screen",
  state: () => ({
    platform: "desktop",
    width: 0,
  }),

  actions: {
    updateWidth(width) {
      this.width = width;

      if (width >= 1208) {
        this.setPlatform("desktop");
      } else if (width >= 768) {
        this.setPlatform("tablet");
      } else {
        this.setPlatform("mobile");
      }
    },

    setPlatform(platform) {
      this.platform = platform;
    },
  },
});
