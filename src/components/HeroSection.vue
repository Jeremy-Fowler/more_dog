<script setup>
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
              More Dog is a dog training service based out of Vancouver, BC
            </h1>
            <p class="fs-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis harum sequi praesentium necessitatibus
              reprehenderit laboriosam ullam quas provident modi repudiandae?
            </p>
          </div>
          <div class="d-flex gap-3">
            <ScheduleButton />
            <!-- FIXME need scrollTo function now -->
            <!-- <a href="#services">
              <button class="btn btn-outline-dark">
                Services
              </button>
            </a> -->
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
  background-image: url(https://images.unsplash.com/photo-1703733566073-cc0e4053a565?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  min-height: 60dvh;
  background-size: cover;
  background-position: center;
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
}

@media (max-width: 991.98px) {
  .hero-bg {
    background-image: url(https://images.unsplash.com/photo-1542583479-28899e4763ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  }
}
</style>
