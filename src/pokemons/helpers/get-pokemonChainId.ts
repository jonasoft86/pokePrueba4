import pokemonApi from '../api/pokemonApi';
import type { PokemonChain } from '../interfaces/pokemonChain';
import type { PokemonChainResponse } from '../interfaces/pokemonChainResponse';

const getPokemonChainById = async(id: string): Promise<PokemonChain> => {

  const { data } = await pokemonApi.get<PokemonChainResponse>(`/evolution-chain/${id}`);

  return {
    id: data.id,
    baby_trigger_item: data.baby_trigger_item,
    chain: data.chain
  }
};

export default getPokemonChainById;