<script setup>
import { mdiChevronRightCircleOutline } from '@mdi/js';
import MaterialDesignIcon from './MaterialDesignIcon.vue';

</script>


<template>
  <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#scheduleFormModal">
    Schedule
    <MaterialDesignIcon :icon="mdiChevronRightCircleOutline" />
  </button>
</template>


<style scoped lang="scss"></style>
