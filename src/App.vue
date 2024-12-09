<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import Header from './shared/components/Header.vue';
import { computed } from 'vue';
import { sideBar } from "@/shared/helpers/Sidebar"
import SideBar from './shared/components/SideBar.vue';
import SideBarDetails from './shared/components/SideBarDetails.vue';

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
      :isExpanded ="sideBar.isOpened"
      v-on:closeSideBar="sideBar.setIsOpened(false)"
    />
    <SideBarDetails
        v-show="currentRoute=='pokemon-id'"
        :isExpanded ="sideBar.isOpened"
        v-on:closeSideBar="sideBar.setIsOpened(false)"
    />
    <RouterView />
  </div>
</template>

<style lang="scss">
  @use "./assets/scss/pages/home";
  @use "./assets/scss/main.scss";
  @use "./assets/scss/global.scss";
</style>
