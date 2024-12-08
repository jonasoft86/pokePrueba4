<script setup lang="ts">
import Pagination from '@/shared/components/Pagination.vue';
import PokemonCardList from '../components/PokemonCardLits.vue';
import { usePokemons } from '../composables/usePokemons';

const { pokemons, isLoading, isError, error, currentPage, getPage } = usePokemons();

</script>

<template>
  <main>
    
      <h1 v-if="isLoading">Loading</h1>

      <div v-else-if="isError">
        {{ error }}
      </div>

      <div v-else>
        <Pagination 
                :pokemonPage="25" 
                :pokemonsTotal="151"  
                :currentPage="currentPage"
                @changePage="getPage" 
        />   
        <div id="container" class="container"> 
          <PokemonCardList 
            :pokemons="pokemons ?? []"
          />
        </div>
      </div>
  </main>
</template>

<style scoped>

</style>
