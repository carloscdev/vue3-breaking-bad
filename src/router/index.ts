import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import characterRoute from "./character.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    {
      path: "/",
      name: "home",
      component: HomeView
    },

    // Default
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' }),
    },
  ]
})

router.addRoute(characterRoute);

export default router;