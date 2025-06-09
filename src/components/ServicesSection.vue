<script setup>
import { mdiChevronDoubleRight } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';
import ScheduleButton from './ScheduleButton.vue';

// TODO refactor to draw from data, too much upkeep
</script>


<template>
  <section id="services" class="bg-warning">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h2 class="text-center my-5 primary-font">Services</h2>
        </div>
        <div class="col-lg-4">
          <h3 class="text-center primary-font">
            One-on-one dog walks
          </h3>
          <p>
            A safe, sniffy and <i>stimulating</i> exercise opportunity. I'm based near
            <a href="https://maps.app.goo.gl/k34BnU11MkAZeHaM7" target="_blank" class="text-dark"
              title="Open in google maps">
              Holdom Station in Burnaby
            </a> but willing
            to travel anywhere within reason.
          </p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3 text-shadow">
              <span class="fs-3 primary-font d-block">$45</span>
              <span>One hour</span>
              <hr>
              <p class="mb-4">
                The ideal mix of brain-buzzing exercise, olfactory engagement, and basic leash work to keep your pup
                energized and happy.
              </p>
            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-dog-jumping.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3">
              <span class="fs-3 primary-font d-block">$35</span>
              <span>45 minutes</span>
              <hr>
              <p class="mb-4">
                A truncated, joyous adventure that will nonetheless leave your dog ready for a nap afterward.
              </p>
            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-brown-dog-licking-his-nose.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3">
              <span class="fs-3 primary-font d-block">$30</span>
              <span>30 minutes</span>
              <hr>
              <p class="mb-4">
                A short there-and-back-again to give your dog a bathroom opportunity and a bit of excitement in their
                day.
              </p>
            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-brown-dog-raising-their-paw.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <h3 class="text-center primary-font">
            Dog-reactive dogs
          </h3>
          <p>
            For those pooches who tend to get a little spicy at their poochkind compatriots.
          </p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3 text-shadow">
              <span class="fs-3 primary-font d-block">$60</span>
              <span>One hour</span>
              <hr>
              <p class="mb-4">
                A safe and stimulating walk that will widen your dog's world and leave 'em pooped and content.
              </p>
            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-gray-dog.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3">
              <span class="fs-3 primary-font d-block">$47</span>
              <span>45 minutes</span>
              <hr>
              <p class="mb-4">
                A walkabout caper with plenty of time for exercise and good times.
              </p>
            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-brown-dog.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-3">
          <div
            class="service-card rounded-4 dark-transition-bg text-light h-100 d-flex flex-column justify-content-between rounded-4 border border-dark border-4">
            <div class="py-4 px-3">
              <span class="fs-3 primary-font d-block">$40</span>
              <span>30 minutes</span>
              <hr>
              <p class="mb-4">
                A lil' romp that will give 'em time to stretch their legs and smell a fern or two.
              </p>

            </div>
            <div>
              <div class="px-3">
                <ScheduleButton>
                  <MaterialDesignIcon :icon="mdiChevronDoubleRight" />
                  Book now
                </ScheduleButton>
              </div>
              <img src="@/assets/images/a-long-haired-dog.png" alt="" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.service-card:hover button {
  transform: translateY(-.5em);
  transition: transform 200ms ease-out;
}

.text-shadow {
  text-shadow: 1px 2px 1px black;
}

.service-card img {
  width: 100%;
  height: 40dvh;
  object-fit: cover;
  object-position: top;
}

.dark-transition-bg {
  background: var(--bs-dark);
  background: linear-gradient(176deg, var(--bs-dark) 0%, rgba(99, 99, 99, 1) 100%);
}

button {
  transition: transform 500ms ease-in;
}

@media (max-width: 991.98px) {
  .service-card img {
    height: 50dvh;
  }
}
</style>
