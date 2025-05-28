<script setup>
import { mdiFacebook, mdiInstagram, mdiPinterest } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';

</script>


<template>
  <div class="bg-dark text-light">
    <div>
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-center gap-2 py-3">
              <a href="" target="_blank" class="text-light" title="Check us out on Instagram">
                <MaterialDesignIcon :icon="mdiInstagram" />
              </a>
              <a href="" target="_blank" class="text-light" title="Check us out on Pinterest">
                <MaterialDesignIcon :icon="mdiPinterest" />
              </a>
              <a href="" target="_blank" class="text-light" title="Check us out on Facebook">
                <MaterialDesignIcon :icon="mdiFacebook" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="border-top border-secondary">
      <section class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center py-2">
              <small>
                Made for Matt by his good buddy
                <a href="https://github.com/Jeremy-Fowler" title="Check out Jeremy's GitHub!" target="_blank"
                  class="text-light">Jeremy</a>.
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<style scoped lang="scss">
.d-flex a:hover {
  transform: translateY(-.1em);
}

.d-flex a {
  transition: transform .2s ease-in-out;
}
</style>
