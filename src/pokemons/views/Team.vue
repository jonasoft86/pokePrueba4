<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePokemonTeams } from '../store/pokemonTeam';
import PokemonCard from '../components/PokemonCard.vue';
import PokemonCardLits from '../components/PokemonCardLits.vue';

const store = usePokemonTeams();
const pokemonTeams = storeToRefs(store);

</script>

<template>
    <main>
        <h2 class="title" id="title">Teams</h2>
        <div id="container" class="container"> 
          <PokemonCardLits 
            :pokemons="pokemonTeams.pokemonTeams.value ?? []"
          />
        </div>
    </main>
</template>

<style lang="scss">
    @use "../../assets/scss/pages/home";
</style>
