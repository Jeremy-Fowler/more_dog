<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import ModalWrapper from './components/ModalWrapper.vue';
import FooterSection from './components/FooterSection.vue';
import ContactForm from './components/ContactForm.vue';
import { ref } from 'vue';

const waitingForResponse = ref(false)
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

  <ModalWrapper modalId="scheduleFormModal" modalSize="modal-lg" showFooter>
    <template #header>
      Schedule a session
    </template>
    <template #body>
      <ContactForm @submitted="waitingForResponse = true" @responded="waitingForResponse = false" />
    </template>
    <template #footer>
      <button class="btn btn-outline-secondary" data-bs-dismiss="modal">
        Cancel
      </button>
      <button class="btn btn-warning" type="submit" form="contact-form" :disabled="waitingForResponse">
        Submit
      </button>
    </template>
  </ModalWrapper>
</template>

<style scoped lang="scss"></style>
