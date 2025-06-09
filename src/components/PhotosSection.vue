<script setup>
import { onMounted, reactive, ref } from 'vue'
import ModalWrapper from './ModalWrapper.vue'

onMounted(getImages)

const images = reactive([])
const activeImage = ref(null)

function getImages() {
  const imageFiles = import.meta.glob('/public/images/*')
  for (const fileName in imageFiles) {
    const filePath = fileName.substring(8)
    const photoName = filePath.substring(filePath.lastIndexOf('/') + 1).replace(/\.\w+$/, '').replaceAll('-', ' ')
    images.push({ path: filePath, name: photoName })
  }
}


</script>


<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h2 class="primary-font">Matt and dogs</h2>
        <div class="masonry-container">
          <div v-for="image in images" :key="image">
            <img @click="activeImage = image" :src="image.path" :alt="image.name"
              class="w-100 mb-3 rounded-4 border border-dark border-4" data-bs-target="#image-modal"
              data-bs-toggle="modal" role="button">
          </div>
        </div>
      </div>
    </div>
  </section>

  <ModalWrapper modalId="image-modal">
    <template #header>
      Check out this dog
    </template>
    <template #body>
      <img v-if="activeImage" :src="activeImage.path" :alt="activeImage.name" class="img-fluid">
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
    min-height: 300px;
    width: 100%;
    transition: box-shadow .2s ease-in-out;
    object-fit: cover;
  }

  img:hover {
    box-shadow: 4px 4px black;
  }
}
</style>
