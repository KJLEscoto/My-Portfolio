<template>
  <div
    class="text-xs px-5 py-1 rounded bg-gray-500/10 text-dark-blue w-fit font-semibold tracking-wider cursor-default select-none">
    {{ name }}
  </div>
</template>

<script setup>
defineProps({
  name: String
})
</script>