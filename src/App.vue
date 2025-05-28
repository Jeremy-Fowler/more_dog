<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import ModalWrapper from './components/ModalWrapper.vue';
import ScheduleForm from './components/ScheduleForm.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<template>
  <header class="sticky-top">
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <FooterSection />
  </footer>

  <ModalWrapper modalId="scheduleFormModal" modalSize="modal-lg">
    <template #header>
      Schedule a session
    </template>
    <template #body>
      <ScheduleForm />
    </template>
  </ModalWrapper>
</template>

<style scoped lang="scss"></style>
