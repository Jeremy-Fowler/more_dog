<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
</script>


<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark border-2">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <span class="barrio-font">More Dog!</span>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link" :class="{ active: route.name == 'about' }"
              ariaCurrentValue="about">
              About
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped lang="scss"></style>
