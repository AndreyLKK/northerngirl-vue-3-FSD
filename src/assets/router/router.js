import { createRouter, createWebHistory } from "vue-router";
import MyHome from "@/pages/MyHome.vue";

const routes = [
  {
    path: "/",
    name: "MyHome",
    component: MyHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
