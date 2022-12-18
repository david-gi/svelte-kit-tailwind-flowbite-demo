<script lang="ts">
    import type { Pokemon } from '$src/models/pokemon'
    import BasicTable from '$src/lib/components/common/BasicTable.svelte'
    import { TableHeadCell, TableBodyCell, TableBodyRow, Badge, Select } from 'flowbite-svelte'
    import type { SelectOptionType } from 'flowbite-svelte/types'

    export let pokemons: Pokemon[]

    let selectedType: string
    let pokemonTypes: SelectOptionType[] = []
    pokemons.forEach((p) => {
        p.type.forEach((t) => {
            const item = { value: t, name: t }
            if (!pokemonTypes.includes(item)) {
                pokemonTypes.push(item)
            }
        })
    })

    $: filteredPokemon = selectedType
        ? pokemons.filter((p: Pokemon) => p.type.includes(selectedType))
        : pokemons
</script>

<BasicTable hoverable={false} striped={true}>
    <svelte:fragment slot="header">
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>
            <Select
                id="select-md"
                underline
                placeholder="Types"
                size="sm"
                items={pokemonTypes}
                bind:value={selectedType}
                class="caret-white placeholder-white"
            />
        </TableHeadCell>
    </svelte:fragment>
    <svelte:fragment slot="body">
        {#each filteredPokemon as pokemon}
            <TableBodyRow>
                <TableBodyCell>{pokemon.name.english}</TableBodyCell>
                <TableBodyCell>
                    {#each pokemon.type as type}
                        <Badge color="indigo" baseClass="mr-1">{type}</Badge>
                    {/each}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </svelte:fragment>
</BasicTable>
