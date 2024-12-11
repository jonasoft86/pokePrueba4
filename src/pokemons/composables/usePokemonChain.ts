import { useQuery } from "@tanstack/vue-query"
import { getPokemonChainById } from "../helpers";
import { ref, watchEffect } from "vue";

export function usePokemonChain(id: string){


  const { isLoading: isLoadChain, data, isError, error: erroMessage, status} = useQuery({
    queryKey: ['chainId', id],
    queryFn: () => getPokemonChainById(id),
    retry: true
  });

  return {
    data,
    isLoadChain,
    isError,
    erroMessage,
    status
  }
}