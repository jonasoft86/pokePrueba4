import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Pokemon } from '../interfaces/';
import Swal from 'sweetalert2'

export const usePokemonTeams = defineStore('charactersTeams', () => {
  const pokemonTeams = ref<Pokemon[]>([]);
  const currentCharacter = ref<Pokemon>();

  const setPokemon = (_character: Pokemon) : void => {
    if(pokemonTeams.value.length>=6){
      Swal.fire({
        title: 'Máximo solo 6 pokemones',
        confirmButtonColor: '#dd082f',
      });
      return
    }
    const existingItemIndex = pokemonTeams.value.findIndex(
      (pokemon) => pokemon.name === _character.name
    )

    if(existingItemIndex == -1){
      currentCharacter.value = _character;
      pokemonTeams.value.push(currentCharacter.value)
    }
    else{
      Swal.fire({
        title: `Pokemon ${_character.name} ya existe en teams`,
        confirmButtonColor: '#dd082f',
      });
    }
  }

  const deletePokemon = (_character: Pokemon) : void => {
    pokemonTeams.value = pokemonTeams.value.filter(
      (pokemon) => pokemon.id !== _character.id
    );
    
  }

  return {
    pokemonTeams,
    setPokemon,
    deletePokemon,
  };
});
