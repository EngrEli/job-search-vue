<script setup>
import MainNav from './components/navigation/MainNav.vue'
import MainHero from './components/JobSearch/MainHero.vue'
</script>

<template>
  <MainNav />

  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/about">Go to About</RouterLink>

  <RouterView />
</template>

<style scoped></style>
