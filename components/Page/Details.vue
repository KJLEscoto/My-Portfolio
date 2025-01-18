<template>
  <span class="space-y-2">
    <h4 class="text-darkest-blue font-semibold lg:text-xl text-lg tracking-wide">{{ subheader }}</h4>
    <h1 class="dark:text-white text-black/80 font-bold lg:text-2xl text-xl" :class="headerClass">{{ header }}</h1>
    <p class="dark:text-gray-500 text-gray-600 tracking-wider w-full lg:text-base text-sm"><slot /></p>
  </span>
</template>

<script setup>
defineProps({
  subheader: String,
  header: String,
  headerClass: String
})
</script>