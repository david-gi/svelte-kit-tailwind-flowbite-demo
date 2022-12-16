<script>
    import '$src/app.css'
    import Navbar from '$components/Navbar.svelte'
</script>

<Navbar />

<div class="px-2 sm:px-4 py-2.5 w-full">
    <div class="mx-auto container">
        <slot />
    </div>
</div>
