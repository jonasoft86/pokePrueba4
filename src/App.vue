<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Header from './shared/components/Header.vue';
import { computed } from 'vue';
import { cart } from "@/shared/helpers/Cart"
import SideBar from './shared/components/SideBar.vue';

const router = useRouter()

const currentRoute = computed(() => {
      return router.currentRoute.value.name
})

</script>

<template>
  <div class="wrapper">
    <Header />
    <SideBar
      v-show="currentRoute!='pokemon-id'"
      :isExpanded ="cart.isOpened"
      v-on:closeSideBar="cart.setIsOpened(false)"
    />
    <RouterView />
  </div>
</template>

<style lang="scss">
  @use "./assets/scss/pages/home";
  @use "./assets/scss/main.scss";
  @use "./assets/scss/global.scss";
</style>
