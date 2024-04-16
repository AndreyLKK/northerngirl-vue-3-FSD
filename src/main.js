import { createApp } from "vue";
import App from "./App.vue";
import router from "@/assets/router/router.js";

import "./assets/reset.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
