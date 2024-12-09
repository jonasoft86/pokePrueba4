<script setup lang="ts">
    import { usePokemonTeams } from '../store/pokemonTeam';
    import type { Pokemon } from '../interfaces';
    import PokemonStats from './PokemonStats.vue';

    interface Props {
        pokemon: Pokemon
    }

    defineProps<Props>();
    const store = usePokemonTeams();
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
        <div class="select">
            <button 
                class="botonSelect" 
                @click="store.setPokemon(pokemon)" >
                    Agregar a team
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/pokemonTypes.scss";
@use "../../assets/scss/components/pokemonCard.scss";
</style>