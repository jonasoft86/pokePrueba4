<script setup lang="ts">
    import { usePokemonTeams } from '../store/pokemonTeam';
    import type { Pokemon } from '../interfaces';

    interface Props {
        pokemon: Pokemon
    }

    defineProps<Props>();
    const store = usePokemonTeams();

    const getPokemonImagenSrc = (pokemon: Pokemon) => {
        return pokemon.sprites.other?.dream_world?.front_default
    }

</script>


<template>
    <div :class="`${ `Info tipo ${pokemon.types[0].type.name}`}`">
        <div class="nombre">
            <h1>{{pokemon.name}}</h1>
        </div>
        <div>
            <img
                :src="getPokemonImagenSrc(pokemon)"
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