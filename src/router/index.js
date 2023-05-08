import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  // linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'pokemones',
      component: () => import('../views/PokemonesView.vue')
    },
    {
      path: '/pokemones/:pokename',
      name: 'pokeview', 
      component: () => import('../views/PokeView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/NotFoundView.vue'),
  },
  ]
})

export default router
