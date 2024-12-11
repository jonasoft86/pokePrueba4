<script setup lang="ts">
import type { PokemonEvolution } from '../interfaces';

interface Props {
  pokemonsEvolutions: PokemonEvolution[]
}

defineProps<Props>();
</script>

<template>
  
  <div class="poke-evolutions">
    <div v-for="pokemon of $props.pokemonsEvolutions">
        <div class="nombre">
            <p>{{pokemon.name}}</p>
        </div>
        <div>
            <img
                :src="pokemon.url"
                :alt="pokemon.name"
                class="imagen"
            />
        </div>
    </div>
  </div>    
</template>

<style lang="scss">

.poke-evolutions {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
}

.poke-evolutions .nombre {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
}

.nombre p {
  color: #fff;
  margin: 0;
  text-transform: capitalize;
  font-size: 12px;
}
/*
.Info {
  padding: 15px 15px;
  border-radius: 1rem;
  max-width: 180px;
  margin: 5px;
}
*/
.poke-evolutions  .imagen {
  display: block;
  margin: 0 auto;
  width: 70px;
}
</style>