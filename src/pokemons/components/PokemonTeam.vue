<script setup lang="ts">
import { usePokemonTeams } from '../store/pokemonTeam';
import type { Pokemon } from '../interfaces';
import PokemonStats from './PokemonStats.vue';
import { useRouter } from 'vue-router';

interface Props {
    pokemon: Pokemon
}

defineProps<Props>();
const store = usePokemonTeams();
const router = useRouter();

const goTo = (idPage:number) => {
    router.push(
        {
            name: 'pokemon-id',
            params: {id: idPage}
        }
    );
}
</script>


<template>
    <div :class="`${ `Info tipo ${pokemon.types[0].type.name}`}`">
        <div class="nombre">
            <h1>{{pokemon.name}}</h1>
        </div>
        <div>
            <img
                :src="pokemon.sprites.other?.dream_world?.front_default"
                :alt="pokemon.name"
                class="imagen"
            />
        </div>
        <PokemonStats :pokemon="pokemon" />

        <div class="buttons-teams">
            <button 
                class="botonSelect" 
                @click="goTo(pokemon.id)" >
                    Seleccionar
            </button>
            <button 
                class="botonSelect" 
                @click="store.deletePokemon(pokemon)" >
                    Eliminar
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/pokemonTypes.scss";
@use "../../assets/scss/components/pokemonCard.scss";

img {
    width: 80px;
}
</style>