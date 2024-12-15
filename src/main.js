import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import MainForm from "./components/MainForm.vue";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/form",
      component: MainForm,
    },
  ],
});

createApp(App).use(router).mount("#app");
