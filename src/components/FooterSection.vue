<script setup>
import { mdiFacebook, mdiInstagram, mdiPinterest } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';

</script>


<template>
  <div class="bg-dark text-light">
    <div class="py-3">
      <section class="container">
        <div class="row">
          <div class="col-lg-4">
            <h2 class="fs-6">Social Media</h2>
            <div class="d-flex gap-2">
              <a href="" target="_blank" class="text-light" title="Check us out on Instagram">
                <MaterialDesignIcon size="24" :icon="mdiInstagram" />
              </a>
              <a href="" target="_blank" class="text-light" title="Check us out on Pinterest">
                <MaterialDesignIcon size="24" :icon="mdiPinterest" />
              </a>
              <a href="" target="_blank" class="text-light" title="Check us out on Facebook">
                <MaterialDesignIcon size="24" :icon="mdiFacebook" />
              </a>
            </div>
          </div>
          <div class="col-lg-4">
            <div>
              <h2 class="fs-6">Contact</h2>
              <a href="mailto:matt@moredog.ca" class="text-light" title="Send Matt an email">
                matt@moredog.ca
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
