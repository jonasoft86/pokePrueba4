<script setup lang="ts">
    import type { Pokemon } from '../interfaces';
    
    interface Props {
        pokemon: Pokemon
    }

    defineProps<Props>();
</script>


<template>
    <div class="pokemon-stats">
        <div class="stat-row" v-for="(stat, index) in pokemon.stats" :key="index">
                <div>{{ stat.stat.name }}</div>
                <div class="stat-bar">
                    <div class="stat-bar-bg" :style="{width: `${stat.base_stat-30}%`}">{{ stat.base_stat }}</div>
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/components/pokemonCard.scss";
@use "../../assets/scss/components/pokemonStats.scss";


</style>