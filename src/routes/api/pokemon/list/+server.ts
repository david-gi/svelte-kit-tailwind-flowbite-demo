import type { RequestHandler } from './$types'
import * as api from '$lib/server/pokemonRepository'
import { json } from '@sveltejs/kit'
import type { Pokemon } from '$src/models/pokemon'

export const GET: RequestHandler = async () => {
    let res: Pokemon[] = await api.getAllPokemon()
    return json(res)
}
