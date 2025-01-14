<template>
  <div>
    <label :for="inputAttributes" class="select-none capitalize text-sm tracking-wide">{{ inputLabel }}</label>
  </div>
</template>

<script setup>
defineProps({
  inputLabel: String,
  inputAttributes: String,
})
</script>