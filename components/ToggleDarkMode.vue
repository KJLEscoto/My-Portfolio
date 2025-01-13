<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <ClientOnly>
    <UButton :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" color="gray" variant="ghost"
      class="rounded-full border border-gray-500/30 dark:hover:border-white hover:border-black trans"
      @click="isDark = !isDark" />
    <template #fallback>
      <div class="w-10 h-10" />
    </template>
  </ClientOnly>
</template>
