<script setup>
import { mdiPaw } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';
import { onMounted, ref } from 'vue';

const pawStatuses = ref([false, false, false, false])
const pawIndex = ref(-1)

onMounted(() => {
  setInterval(incrementIndex, 500)
})

function incrementIndex() {
  pawIndex.value++
  if (pawIndex.value == pawStatuses.value.length) pawIndex.value = 0
  pawStatuses.value[pawIndex.value] = !pawStatuses.value[pawIndex.value]
}


</script>


<template>
  <div class="pb-5">
    <div class="w-50 d-flex justify-content-between">
      <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate mt-3" size="32" :class="{ 'opacity-0': !pawStatuses[3] }" />
      <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate" size="32" :class="{ 'opacity-0': !pawStatuses[2] }" />
    </div>
    <div class="d-flex justify-content-end">
      <div class="d-flex justify-content-between w-50">
        <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate" size="32" :class="{ 'opacity-0': !pawStatuses[1] }" />
        <MaterialDesignIcon :icon="mdiPaw" class="paw-rotate mt-4" size="32"
          :class="{ 'opacity-0': !pawStatuses[0] }" />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.paw-rotate {
  transform: rotate(300deg);
  transition: opacity .2s ease-in-out;
}
</style>
