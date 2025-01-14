<template>
  <div>
    <textarea class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full h-32 dark:text-white"
      :name="inputAttributes" :id="inputAttributes"></textarea>
  </div>
</template>

<script setup>
defineProps({
  inputAttributes: String,
})
</script>