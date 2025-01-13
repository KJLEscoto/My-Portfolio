<template>
  <span class="space-y-2">
    <h4 class="text-dark-blue font-semibold text-xl tracking-wide">{{ subheader }}</h4>
    <h1 class="text-white font-bold text-2xl">{{ header }}</h1>
    <p class="text-gray-500 tracking-wider w-full"><slot /></p>
  </span>
</template>

<script setup>
defineProps({
  subheader: String,
  header: String,
})
</script>