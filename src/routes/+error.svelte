<script>
    import { page } from '$app/stores'
    import { Heading } from 'flowbite-svelte'
</script>

<Heading tag="h2">{$page.status}: {$page.error?.message}</Heading>
