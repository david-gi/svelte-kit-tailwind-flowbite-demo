<script lang="ts">
    import { Table, TableBody, TableBodyRow, TableHead } from 'flowbite-svelte'
    import type { PromiseStatus } from '$src/models/base'

    export let status: PromiseStatus
    export let hoverable: boolean
    export let striped: boolean
</script>

<Table {hoverable} {striped} color="purple">
    <TableHead>
        <slot name="header" />
    </TableHead>
    <TableBody>
        {#if status == 'result'}
            <slot name="body" />
        {:else}
            <TableBodyRow>
                <td class="p-6" colspan="10">
                    {status == 'pending' ? 'Loading...' : status}
                </td>
            </TableBodyRow>
        {/if}
    </TableBody>
</Table>
