<script setup lang="ts">
    import { Icon } from '@iconify/vue';
    import { cart } from '../helpers/Cart'
</script>

<template>
      <header class="header-mobile">
          <h1 class="logo">PokeApp</h1>
          <button @click="cart.setIsOpened(true)" class="open-menu" id="open-menu">
              <Icon icon="material-symbols:menu-rounded" width="36" height="36" />
          </button>
      </header>
</template>

<style lang="scss">
    @use "../../assets/scss/components/header.scss";
</style>