import { createRouter, createWebHistory } from 'vue-router'
import PokemonList from '@/pokemons/views/PokemonList.vue';
import Team from '@/pokemons/views/Team.vue';
import PokemonDetail from '@/pokemons/views/pokemonDetail.vue';

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
        component: Team,
    },
    {
      path: '/team/:id(\\d+)+', 
      props: { title: 'Pokemon por ID'},
      name: 'pokemon-id',
      component:  PokemonDetail
    },  
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        console.log('Ruta no existe!');
        return { name: 'home' }
      }
    }
  ]
})

export default router
