<script setup></script>


<template>
  <section class="container-fluid">
    <div class="row hero-bg">
      <div class="col-12 align-self-center">
        <div>
          <h1>
            More Dog!
          </h1>
        </div>
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

h1 {
  color: var(--bs-light);
  text-shadow: 2px 2px 4px var(--bs-dark);
  font-size: 3rem;
}

@media (max-width: 767.98px) {
  .hero-bg {
    background-image: url(https://images.unsplash.com/photo-1542583479-28899e4763ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  }
}
</style>
