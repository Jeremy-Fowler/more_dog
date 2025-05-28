<script setup>
import { onMounted, reactive } from 'vue'

onMounted(getImages)

const images = reactive([])

async function getImages() {
  const imageFiles = import.meta.glob('../../public/images/*.avif')
  console.log(imageFiles)
  for (const fileName in imageFiles) {
    const photoName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    // const image = await import(``)
    images.push(`/images/${photoName}.avif`)
  }

}
</script>


<template>
  <section class="container mt-3">
    <div class="row">
      <div class="col-12">
        <div class="masonry-container">
          <div v-for="image in images" :key="image">
            <img :src="image" alt="" class="w-100 mb-3">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
.masonry-container {
  columns: 300px;

  >* {
    display: inline-block;
    break-inside: avoid;
  }
}
</style>
