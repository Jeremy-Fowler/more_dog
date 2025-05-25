<script setup>
import HeroSection from '@/components/HeroSection.vue';
import MaterialDesignIcon from '@/components/MaterialDesignIcon.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import { mdiCheckCircle, } from '@mdi/js';

</script>

<template>
  <HeroSection />
  <section class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <ul class="p-5">
          <li class="d-flex gap-2">
            <MaterialDesignIcon :icon="mdiCheckCircle" class="text-warning" />
            <div>
              <b>More Dog!</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <MaterialDesignIcon :icon="mdiCheckCircle" class="text-warning" />
            <div>
              <b>More Dog!</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="d-flex gap-2">
            <MaterialDesignIcon :icon="mdiCheckCircle" class="text-warning" />
            <div>
              <b>More Dog!</b>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div class="p-5">
          <img
            src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1851&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Two dogs taking a walk"
            class="img-fluid shadow-box-bottom-end-warning rounded-4 border border-warning border-4">
        </div>
      </div>
    </div>
  </section>
  <ServicesSection />
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
