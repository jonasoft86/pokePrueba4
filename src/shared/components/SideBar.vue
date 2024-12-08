<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { usePokemonTeams } from '../../pokemons/store/pokemonTeam';
    import { storeToRefs } from 'pinia';
    import type { SideBarProps } from '../interfaces';

    const props=defineProps<SideBarProps>();
    const store = usePokemonTeams();
    const pokemonTeams = storeToRefs(store);
</script>

<template>
    <aside :class="`${props.isExpanded ? 'aside-visible' : ''}`">
        <button @click="$emit('closeSideBar')" class="close-menu" id="close-menu">
            <Icon icon="material-symbols:close-rounded" width="36" height="36" />
        </button>
        <header>
            <h1 class="logo">PokeApp</h1>
        </header>

        <nav>
            <ul class="menu">
                <li>
                    <router-link to="/" 
                        class="boton-menu"
                        activeClass="active"
                    >
                        <Icon icon="material-symbols:home-outline" width="36" height="36" />
                        Principal
                    </router-link>
                </li>
                <li>
                    <router-link to="/team" 
                        class="boton-menu boton-carrito"
                        activeClass="active"
                    >
                        <Icon icon="healthicons:heart-outline" width="36" height="36" /> 
                        Teams
                        <span id="numerito" class="numerito">{{pokemonTeams.pokemonTeams.value.length}}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div>
            <p class="texto-footer">© 2024 Jonathan Monroy</p>
        </div>
    </aside>
</template>

<style lang="scss">
    @use "../../assets/scss/components/sideBar.scss";
</style>

