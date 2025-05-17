<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
defineProps({
  icon: { type: String, required: true },
  size: { type: String, default: '24' }
})

</script>


<template>
  <SvgIcon type="mdi" :path="icon" :height="size" :width="size"></SvgIcon>
</template>
