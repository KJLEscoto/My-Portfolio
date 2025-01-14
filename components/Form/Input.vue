<template>
  <div>
    <input :id="inputAttributes" :name="inputAttributes" :type="inputType"
      class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full dark:text-white">
  </div>
</template>

<script setup>
defineProps({
  inputAttributes: String,
  inputType: String,
})
</script>