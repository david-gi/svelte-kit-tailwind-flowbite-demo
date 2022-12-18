<script lang="ts">
    import { Table, TableBody, TableHead } from 'flowbite-svelte'

    export let hoverable: boolean
    export let striped: boolean
</script>

<Table {hoverable} {striped} color="default">
    <TableHead>
        <slot name="header" />
    </TableHead>
    <TableBody>
        <slot name="body" />
    </TableBody>
</Table>
