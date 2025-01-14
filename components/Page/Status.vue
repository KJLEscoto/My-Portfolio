<template>
  <div v-if="status === 'pending'" class="text-gray-500 text-center font-bold text-lg mt-5">
    <UIcon class="w-20 h-20" name="i-line-md-loading-loop" />
    <p>Loading...</p>
  </div>

  <div v-if="status === 'error'" class="text-red-500 text-center font-bold text-lg mt-5">
    <UIcon class="w-20 h-20" name="i-fluent-cloud-error-28-filled" />
    <p>Error loading projects. Please try again later.</p>
  </div>
</template>

<script setup>
defineProps({
  status: String,
})
</script>