<template>
  <div class="flex items-center gap-2 flex-wrap">
    <span class="flex gap-2 items-center px-4 py-2 bg-gray-500/10 rounded select-none" v-for="skill in skills">
      <UIcon :name="skill.icon" />
      <p class="text-sm text-black/80 dark:text-white/80 font-semibold">{{ skill.name }}</p>
    </span>
  </div>
</template>

<script setup>
defineProps({
  skills: Array
})
</script>