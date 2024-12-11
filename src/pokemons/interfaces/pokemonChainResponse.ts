export interface PokemonChainResponse {
  id: number;
  baby_trigger_item: string;
  chain: Chain
}

export interface Chain {
  evolution_details: any[];
  evolves_to: any[];
  is_baby: boolean;
  species: any
}
