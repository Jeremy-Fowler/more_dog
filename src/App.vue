<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
  </footer>
</template>

<style scoped lang="scss"></style>
