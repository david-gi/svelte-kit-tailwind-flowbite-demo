import * as data from './pokedex.json'

export type Pokemon = {
    id: number
    name: {
        english: string
        japanese: string
        chinese: string
        french: string
    }
    type: Array<string>
    base: {
        HP: number
        Attack: number
        Defense: number
        'Sp. Attack': number
        'Sp. Defense': number
        Speed: number
    }
}

export function getAllPokemon(): Promise<Pokemon[]> {
    // In the real app, this would be a from postgres
    return Promise.resolve(data)
}

export function savePokemon(pokemon: Pokemon): Promise<void> {
    // No persistance, so just logging
    console.log(pokemon)
    return Promise.resolve()
}
