<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue';
import ModalWrapper from './components/ModalWrapper.vue';
import FooterSection from './components/FooterSection.vue';
import ContactForm from './components/ContactForm.vue';
import { ref, watch } from 'vue';
import MaterialDesignIcon from './components/MaterialDesignIcon.vue';
import { mdiLoading } from '@mdi/js';

const waitingForResponse = ref(false)
const route = useRoute()
watch(() => route.name, () => {
  window.scrollTo(0, 0)
})
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

  <ModalWrapper modalId="contact-modal" modalSize="modal-lg" showFooter>
    <template #header>
      Schedule a session
    </template>
    <template #body>
      <ContactForm @submitted="waitingForResponse = true" @responded="waitingForResponse = false" />
    </template>
    <template #footer>
      <button class="btn btn-outline-secondary" data-bs-dismiss="modal" type="button">
        Cancel
      </button>
      <button class="btn btn-warning" type="submit" form="contact-form" :disabled="waitingForResponse">
        Submit
        <MaterialDesignIcon v-if="waitingForResponse" :icon="mdiLoading" spin role="status" />
      </button>
    </template>
  </ModalWrapper>
</template>

<style scoped lang="scss"></style>
