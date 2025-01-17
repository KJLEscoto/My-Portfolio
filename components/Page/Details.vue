<template>
  <span class="space-y-2">
    <h4 class="text-darkest-blue font-semibold text-xl tracking-wide">{{ subheader }}</h4>
    <h1 class="dark:text-white text-black/80 font-bold text-2xl" :class="headerClass">{{ header }}</h1>
    <p class="dark:text-gray-500 text-gray-600 tracking-wider w-full"><slot /></p>
  </span>
</template>

<script setup>
defineProps({
  subheader: String,
  header: String,
  headerClass: String
})
</script>