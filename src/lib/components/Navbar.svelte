<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

    const navItems = [
        { href: '/', text: 'Home' },
        { href: '/pokemon', text: 'Pokemon' },
        { href: '/modal', text: 'Modal' }
    ];
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Assignment
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each navItems as navItem}
            <NavLi href={navItem.href}>{navItem.text}</NavLi>
        {/each}
    </NavUl>
</Navbar>
