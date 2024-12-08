import axios from 'axios';
import pokemonApi from '../api/pokemonApi';

import type { Pokemon, PokemonListResponse, PokemonResponse } from "../interfaces";
//import { sleep } from './sleep';

// Filtrando "data" que é o retorno da API, para retornar apenas os dados do tipo "pokemon";
export const getPokemons = async(index: number): Promise<Pokemon[]> => {

  const perPage = 25;
  const newLink = `https://pokeapi.co/api/v2/pokemon?offset=${index*perPage}&limit=${perPage}`;
  const { data } = await pokemonApi.get<PokemonListResponse>(newLink);
  const pokemonPromises: Promise<Pokemon>[] = [];

  for( const { url } of data.results ) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
      }
    });
    pokemonPromises.push(pokemonPromise);
  };

  const pokemons = await Promise.all(pokemonPromises);

  return pokemons;
};