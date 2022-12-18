<script lang="ts">
    import PokemonTable from '$components/PokemonTable.svelte'
    import type { PageData } from './$types'

    export let data: PageData
    let pokemons = data.default
</script>

<PokemonTable {pokemons} />
