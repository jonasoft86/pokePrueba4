import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Pokemon , ResultSearch} from '../interfaces/';

export const usePokemonStore = defineStore('characters', () => {
  const pokemons = ref<ResultSearch>([]);
  const currentCharacter = ref<Pokemon>();
  const latestCharacters = ref<Pokemon[]>([]);
  const currentPage = ref<number>(0);
  const totalPages = ref<number>(6);

  function setLatestCharacters(_characters: Pokemon[]) {
    latestCharacters.value = _characters;
  }

  function setCurrentCharacter(_character: Pokemon) {
    currentCharacter.value = _character;
  }

  function setPokemons(_characters: ResultSearch) {
    pokemons.value = _characters;
  }

  function setPageCharacter(_currentPage: number) {
    currentPage.value = _currentPage;
  }

  return {
    pokemons,
    latestCharacters,
    currentCharacter,
    currentPage,
    totalPages,
    setLatestCharacters,
    setCurrentCharacter,
    setPokemons,
    setPageCharacter
  };
});
