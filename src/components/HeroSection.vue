<script setup>
import { mdiChevronDoubleRight } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';
import ScheduleButton from './ScheduleButton.vue';
</script>


<template>
  <section class="container-fluid mb-5">
    <div class="row hero-bg">
      <div class="col-12 align-self-center">
        <div>
          <img src="/more-dog-logo.webp" alt="More Dog text wrapping around a cartoon dog sleeping" class="logo">
        </div>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-lg-6">
        <div class="d-flex flex-column h-100 my-5">
          <div>
            <h1 class="fs-1 primary-font">
              Helping dogs to be more of themselves.
            </h1>
            <p class="fs-5">
              Maybe your dog has the constant zoomies. Maybe they've got an overactive sense of stranger danger. Maybe
              they seem desperate to stop and sniff every single flower that ever bloomed on Earth. Whatever the case,
              I'll embrace the qualities that make them unique and give them an enriching, confidence-boosting,
              life-affirming experience. Along the way, I'll help guide them a little closer toward being (even more)
              responsible pup citizens.
              <br>
              <br>
              You love your dog. <b>I will too.</b>
            </p>
          </div>
          <div class="d-flex gap-3">
            <ScheduleButton data-bs-target="#contact-modal" data-bs-toggle="modal">
              <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
              <b>
                Book a free consultation
              </b>
            </ScheduleButton>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <aside class="my-5">
          <img
            src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A corgi and a terrier walking next to each other"
            class="img-fluid shadow-box-bottom-end-dark rounded-4 border border-dark border-4">
        </aside>
      </div>
    </div>
  </section>

</template>


<style scoped lang="scss">
.hero-bg {
  background-image: url(/public/images/a-dog-sniffing-something-in-tall-grass.jpg);
  min-height: 70dvh;
  background-size: cover;
  background-position: 0 1000px;
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

aside img {
  max-height: 75dvh;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}

.logo {
  max-height: 40dvh;
  max-width: 100%;
  object-fit: cover;
}

@media (max-width: 991.98px) {
  .hero-bg {
    background-position: bottom;
  }
}
</style>
