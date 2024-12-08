import type { Sprites, Stat, Type } from "./pokemonResponse";

export type ResultSearch = Pokemon[];

export interface Pokemon
{
    id: number;
    name: string;
    frontSprite: string;
    types: Type[];
    sprites: Sprites;
    stats: Stat[];
}