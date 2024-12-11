import { useQuery } from "@tanstack/vue-query"
import getSpecieId from "../helpers/get-specieId";
import { ref, watchEffect } from "vue";
import { getPokemonChainById } from "../helpers";

export function usePokemonSpecie(id: string){

  const idSpecie = ref();

  const { isLoading: isLoadSpecie, data: specieData, isError, error: erroMessage, status} = useQuery({
    queryKey: ['specieId', id],
    queryFn: () => getSpecieId(id),
  });

  watchEffect(() => {
      if (isLoadSpecie){
          idSpecie.value  = specieData.value?.evolution_chain.url.split('/').slice(-2)[0]
      }
  });

  return {
    isLoadSpecie,
    idSpecie,
    isError,
    erroMessage,
    status
  }
}