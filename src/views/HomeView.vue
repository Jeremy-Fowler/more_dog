<script setup>
import MaterialDesignIcon from '@/components/MaterialDesignIcon.vue';
import { mdiCheckCircle } from '@mdi/js';

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
        <ul>
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
            alt="2 dogs taking a walk" class="img-fluid shadow-box-bottom-end rounded border border-warning border-4">
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

@media (max-width: 767.98px) {
  .hero-bg {
    background-image: url(https://images.unsplash.com/photo-1542583479-28899e4763ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  }
}
</style>
