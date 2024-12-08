import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '@/pokemons/views/PokemonList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonList
    },
    {
        path: "/team",
        name: "Team",
        component: () => PokemonList,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        console.log('Rota no existe!');
        return { name: 'home' }
      }
    }
  ]
})

export default router
