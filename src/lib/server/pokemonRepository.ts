import * as data from './pokedex.json'
import type { Pokemon } from '$src/models/pokemon'

export function getAllPokemon(): Promise<Pokemon[]> {
    // In the real app, this would be a from postgres
    return Promise.resolve(data)
}

export function savePokemon(pokemon: Pokemon): Promise<void> {
    // No persistance, so just logging
    console.log(pokemon)
    return Promise.resolve()
}
