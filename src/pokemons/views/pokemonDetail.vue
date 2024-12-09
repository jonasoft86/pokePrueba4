<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import PokemonStats from '../components/PokemonStats.vue';

const route = useRoute();

const routeId = route.params.id
const { pokemon} = usePokemon(routeId.toString());

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