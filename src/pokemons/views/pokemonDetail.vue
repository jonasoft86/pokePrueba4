<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import PokemonStats from '../components/PokemonStats.vue';

import { usePokemonSpecie } from '../composables/usePokemonSpecie';
import { ref, watchEffect } from 'vue';
import { usePokemons } from '../composables/usePokemons';
import type { PokemonEvolution } from '../interfaces';
import getPokemonChainById from '../helpers/get-pokemonChainId';
import PokemonEvolutions from './PokemonEvolutions.vue';

const route = useRoute();

const routeId = route.params.id

const { pokemon } = usePokemon(routeId.toString());
const { idSpecie }  = usePokemonSpecie(routeId.toString());
const chainData = ref();
const pokeEvolutions = ref<PokemonEvolution[]>([]); 

watchEffect( async() => {
      if (idSpecie.value){
        chainData.value =  await getPokemonChainById(idSpecie.value)

        const chain = chainData.value.chain;
        let currentChain = chain;
        while (currentChain) {
            const url = currentChain.species.url;
            const name = currentChain.species.name;
            currentChain = currentChain.evolves_to[0];

            const currentEvolution = {
                name : name!,
                url : getSpriteUrl(url)!
            }
            pokeEvolutions.value.push(currentEvolution)

        }
      }
});

const getSpriteUrl = (url: string) => {
      if (!url) return null
      const parts = url.split('/').filter(Boolean)
      const idSpecie = parts[parts.length - 1]
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idSpecie}.png`
}

</script>

<template>
    <main>
        <h2 class="title" id="title">Pokemon Detail</h2>
       
        <div id="container" class="container">
            <div :class="`${ `Info tipo ${pokemon?.types[0].type.name}`}`">
                <div class="nombre">
                    <h1>{{pokemon?.name}}</h1>
                </div>

                <div class="tipos" v-for="(poke, index) in pokemon?.types">
                    <div :key="index" class="tipo">
                        <span>{{poke.type.name}}</span>
                    </div>
                </div>
                <div>
                    <img
                        :src="pokemon?.sprites.other?.dream_world?.front_default"
                        :alt="pokemon?.name"
                        class="imagen"
                    />
                </div>
                <PokemonStats :pokemon="pokemon" />
                <PokemonEvolutions :pokemonsEvolutions="pokeEvolutions"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    @use "../../assets/scss/pokemonTypes.scss";
    @use "../../assets/scss/components/pokemonCard.scss";
    @use "../../assets/scss/components/pokemonItemTeam.scss";

    .container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center ;
        
    }
    .Info {
        display: flex;
        flex-direction: column;
        width: 400px !important;
    }

    img {
        width: 200px;
    }
</style>