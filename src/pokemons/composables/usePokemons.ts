import { computed, watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "../helpers/get-pokemons";
import { usePokemonStore } from "../store/pokemonStore";
import { storeToRefs } from "pinia";

export const usePokemons = () => {

  const store = usePokemonStore();
  const { pokemons, currentPage, totalPages } = storeToRefs(store);

  const { isLoading, data: pokemonsData, isError, error } = useQuery(
      {
          queryKey: ['pokemon?offset=', currentPage],
          queryFn: () => getPokemons(currentPage.value),
      }
  );
  
  watchEffect(() => {
      if (pokemonsData.value) store.setPokemons(pokemonsData.value);
  });
    
  return {
    pokemons, 
    currentPage, 
    totalPages,
    isLoading,
    isError,
    error, 
    getPage: store.setPageCharacter
}
}