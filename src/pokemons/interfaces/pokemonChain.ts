import type { Chain } from "./pokemonChainResponse";

export interface PokemonChain
{
    id: number;
    baby_trigger_item: string;
    chain: Chain
}