import { createApp } from "vue";
import App from "./App.vue";
import router from "@/assets/router/router.js";
import { createPinia } from "pinia";

import "./assets/reset.css";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
