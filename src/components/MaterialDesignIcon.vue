<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
defineProps({
  icon: { type: String, required: true },
  size: { type: String, default: '16' },
  spin: { type: Boolean, default: false }
})

</script>


<template>
  <SvgIcon type="mdi" :path="icon" :height="size" :width="size" :class="{ 'spin-icon': spin }"></SvgIcon>
</template>


<style scoped lang="scss">
.spin-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
