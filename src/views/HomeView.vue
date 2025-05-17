<script setup>
import MaterialDesignIcon from '@/components/MaterialDesignIcon.vue';
import { mdiAlertBox, mdiAlertOctagon, mdiAlertOctagonOutline, mdiCheckCircle, mdiGlasses, mdiPaw } from '@mdi/js';

</script>

<template>
  <!-- ANCHOR hero -->
  <section class="container-fluid">
    <div class="row hero-bg">
      <div class="col-12 align-self-center">
        <div class="p-5 d-md-flex justify-content-end">
          <h1>
            Let Your Dog
            <br>
            <b>be more dog</b>
          </h1>
        </div>
      </div>
    </div>
  </section>
  <!-- ANCHOR bullets -->
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
  <!-- ANCHOR services -->
  <section id="services" class="bg-warning">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-center my-4">Services</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="p-5 h-100">
            <img
              src="https://images.unsplash.com/photo-1611759284397-079b3495f061?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-start-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-md-7">
          <div class="d-flex flex-column justify-content-between h-100 p-5">
            <div>
              <div class="w-50 d-flex justify-content-between">
                <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate mt-3" size="32" />
                <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate" size="32" />
              </div>
              <div class="d-flex justify-content-end">
                <div class="d-flex justify-content-between w-50">
                  <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate" size="32" />
                  <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate mt-4" size="32" />
                </div>
              </div>
            </div>
            <div class="shadow-box-bottom-start-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mt-5">
              <h3>Walking</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <button class="btn btn-warning">Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 order-md-2">
          <div class="p-5 h-100">
            <img
              src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-end-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-md-7">
          <div class="d-flex flex-column justify-content-between h-100 p-5">
            <div class="shadow-box-bottom-end-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mb-5">
              <h3>Commands</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <button class="btn btn-warning">Schedule</button>
              </div>
            </div>
            <div class="text-center">
              <MaterialDesignIcon :icon="mdiGlasses" size="100" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="p-5 h-100">
            <img
              src="https://images.unsplash.com/photo-1575785662490-1e3ce6806ed5?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dog on a leash sitting down"
              class="img-fluid shadow-box-bottom-start-dark rounded-4 border border-dark border-4 h-100 object-fit-cover">
          </div>
        </div>
        <div class="col-md-7">
          <div class="d-flex flex-column justify-content-between h-100 p-5">
            <div class="shadow-box-bottom-start-dark bg-light rounded-4 px-4 py-2 border border-dark border-4 mb-5">
              <h3>Obedience</h3>
              <p class="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore deleniti quidem facere ad? Odio at
                sapiente, nesciunt suscipit velit dolorum.
              </p>
              <div class="text-end">
                <button class="btn btn-warning">Schedule</button>
              </div>
            </div>
            <div class="text-center">
              <MaterialDesignIcon :icon="mdiAlertOctagonOutline" size="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-bg {
  background-image: url(https://images.unsplash.com/photo-1601758174811-a04aad8f2245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  min-height: 90dvh;
  background-size: cover;
  background-position: bottom;
}

h1 {
  color: var(--bs-light);
  text-shadow: 2px 2px 4px var(--bs-dark);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.paw-rotate {
  transform: rotate(300deg);
}

@media (max-width: 767.98px) {
  .hero-bg {
    background-image: url(https://images.unsplash.com/photo-1542583479-28899e4763ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  }
}
</style>
