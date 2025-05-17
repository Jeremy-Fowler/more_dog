<script setup>
import { mdiPaw } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';
import { onMounted, ref } from 'vue';

const pawStatuses = ref([false, false, false, false])
const pawIndex = ref(-1)

onMounted(() => {
  setInterval(() => {
    console.log('running');

    pawIndex.value++
    if (pawIndex.value == pawStatuses.value.length) {
      pawIndex.value = 0
    }
    pawStatuses.value[pawIndex.value] = !pawStatuses.value[pawIndex.value]
  }, 1000)
})


</script>


<template>
  <div>
    <div class="w-50 d-flex justify-content-between">
      <MaterialDesignIcon v-if="pawStatuses[3]" :icon="mdiPaw" class="paw-rotate mt-3" size="32" />
      <MaterialDesignIcon v-if="pawStatuses[2]" :icon="mdiPaw" class="paw-rotate" size="32" />
    </div>
    <div class="d-flex justify-content-end">
      <div class="d-flex justify-content-between w-50">
        <MaterialDesignIcon v-if="pawStatuses[1]" :icon="mdiPaw" class="paw-rotate" size="32" />
        <MaterialDesignIcon v-if="pawStatuses[0]" :icon="mdiPaw" class="paw-rotate mt-4" size="32" />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.paw-rotate {
  transform: rotate(300deg);
}
</style>
