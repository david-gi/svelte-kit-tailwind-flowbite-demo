<script lang="ts">
    import { TableHeadCell, TableBodyCell, TableBodyRow, Badge } from 'flowbite-svelte'
    import BasicTable from '$src/lib/components/common/BasicTable.svelte'
    import type { Pokemon } from '$src/models/pokemon'

    export let pokemons: Pokemon[]

    let selectedType: string
    let headers = ['Pokemon', 'Attributes']

    $: filteredPokemon = selectedType
        ? pokemons.filter((p: Pokemon) => p.type.includes(selectedType))
        : pokemons
</script>

<BasicTable hoverable={false} striped={true}>
    <svelte:fragment slot="header">
        {#each headers as header}
            <TableHeadCell>{header}</TableHeadCell>
        {/each}
    </svelte:fragment>
    <svelte:fragment slot="body">
        {#each filteredPokemon as pokemon}
            <TableBodyRow>
                <TableBodyCell>{pokemon.name.english}</TableBodyCell>
                <TableBodyCell>
                    {#each pokemon.type as type}
                        <Badge color="green" baseClass="mr-1">{type}</Badge>
                    {/each}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </svelte:fragment>
</BasicTable>
