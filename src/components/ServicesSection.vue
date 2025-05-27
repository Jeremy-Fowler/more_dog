<script setup>
import { mdiAlertOctagonOutline, mdiGlasses } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';
import WalkingPaws from './WalkingPaws.vue';
import ScheduleButton from './ScheduleButton.vue';

</script>


<template>
  <section id="services" class="bg-warning">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center my-4">Services</h2>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="h-100 pb-5">
            <img
              src="https://images.unsplash.com/photo-1611759284397-079b3495f061?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-start-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex flex-column justify-content-between h-100 pb-5">
            <WalkingPaws />
            <div
              class="shadow-box-bottom-start-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mt-5 service-card">
              <h3>Walking</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-4 order-lg-2">
          <div class="h-100 pb-5">
            <img
              src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-end-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex flex-column justify-content-between h-100 pb-5">
            <div class="text-center order-lg-1">
              <MaterialDesignIcon :icon="mdiGlasses" size="100" />
            </div>
            <div
              class="shadow-box-bottom-end-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mb-5 service-card">
              <h3>Commands</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <div class="h-100 pb-5">
            <img
              src="https://images.unsplash.com/photo-1575785662490-1e3ce6806ed5?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-start-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex flex-column justify-content-between h-100 pb-5">
            <div class="text-center order-lg-1">
              <MaterialDesignIcon :icon="mdiAlertOctagonOutline" size="100" />
            </div>
            <div
              class="shadow-box-bottom-start-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mb-5 service-card">
              <h3>Obedience</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <ScheduleButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.service-card:hover button {
  transform: translateY(-1em);
  transition: transform 200ms ease-out;
}

button {
  transition: transform 500ms ease-in;
}
</style>
