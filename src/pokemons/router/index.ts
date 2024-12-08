import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = "pokemons";

export const pokemonRoute: RouteRecordRaw = {
  path: `/${ROUTE_NAME}`,
  redirect: `/${ROUTE_NAME}/`, //redirecionamento, para rota padrão ao entrar no modulo pokemons

  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ROUTE_NAME}/`,
      props: { title: 'Lista Pókemons' },
      name: 'pokemon-list',
      component: () => import('@/pokemons/views/PokemonList.vue'),
    },
  ]
}