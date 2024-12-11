import pokemonApi from '../api/pokemonApi';
import type { PokemonSpecieResponse } from '../interfaces';

const getSpecieId = async(id: string): Promise<PokemonSpecieResponse> => {

  const { data } = await pokemonApi.get<PokemonSpecieResponse>(`/pokemon-species/${id}`);

  //const dataId = data.evolution_chain.url.split('/').slice(-2)[0]
  
  return  {
    evolution_chain: data.evolution_chain
  }
  
};

export default getSpecieId;