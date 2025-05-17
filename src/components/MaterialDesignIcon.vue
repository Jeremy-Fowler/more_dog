<script setup>
import SvgIcon from '@jamescoyle/vue-icon';

defineProps({ icon: { type: String, required: true } })
</script>


<template>
  <SvgIcon type="mdi" :path="icon"></SvgIcon>
</template>
