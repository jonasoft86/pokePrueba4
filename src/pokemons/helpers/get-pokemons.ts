import pokemonApi from "../api/pokemonApi"
import type { PokemonListResponse, Pokemon, PokemonResponse } from "../interfaces"

const getPokemons = async(index: number): Promise<Pokemon[]> => {
    const perPage = 25;
    const newLink = `https://pokeapi.co/api/v2/pokemon?offset=${index*perPage}&limit=${perPage}`;
    const { data } = await pokemonApi.get<PokemonListResponse>(newLink);
    const pokemonPromises: Promise<Pokemon>[] = [];
    for (const { url } of data.results) {
        const pokemonPromise: Promise<Pokemon> = pokemonApi.get<PokemonResponse> (url).then (( {data}) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default,
                types: data.types,
                sprites: data.sprites,
                stats: data.stats,
            }
        });
        pokemonPromises.push(pokemonPromise);
    }
    const pokemonList = await Promise.all (pokemonPromises);

    return pokemonList;
}

export default getPokemons;