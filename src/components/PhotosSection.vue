<script setup>
import { onMounted, reactive, ref } from 'vue'
import ModalWrapper from './ModalWrapper.vue'

onMounted(getImages)

const images = reactive([])
const activeImage = ref(null)

async function getImages() {
  const imageFiles = import.meta.glob('/public/images/*.avif')
  console.log(imageFiles)
  for (const fileName in imageFiles) {
    const photoName = fileName
      .substring(fileName.lastIndexOf('/') + 1)
      .replace(/\.\w+$/, '')
    // const image = await import(``)
    images.push({ path: `images/${photoName}.avif`, name: photoName })
  }

}
</script>


<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="masonry-container">
          <div v-for="image in images" :key="image">
            <img @click="activeImage = image" :src="image.path" :alt="image.name"
              class="w-100 mb-3 rounded-4 border border-dark border-4" :title="image.name" data-bs-target="#imageModal"
              data-bs-toggle="modal" role="button">
          </div>
        </div>
      </div>
    </div>
  </section>

  <ModalWrapper modalId="imageModal">
    <template #header>
      Check out this dog
    </template>
    <template #body>
      <img v-if="activeImage" :src="activeImage.path" :alt="activeImage.name" class="w-100">
    </template>
  </ModalWrapper>
</template>


<style scoped lang="scss">
.masonry-container {
  columns: 300px;

  >* {
    display: inline-block;
    break-inside: avoid;
  }

  img {
    transition: box-shadow .2s ease-in-out;
  }

  img:hover {
    box-shadow: 4px 4px black;
  }
}
</style>
