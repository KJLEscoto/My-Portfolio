<template>
  <h1 v-if="logoType === 'mainLogo'" class="font-bold text-2xl cursor-pointer hover:opacity-75 trans select-none">{{ mainLogo }}</h1>
  <h1 v-if="logoType === 'iconLogo'" class="font-bold text-xl cursor-pointer hover:opacity-75 trans select-none">{{ iconLogo }}</h1>
</template>

<script setup>
const mainLogo = '<KinWebb/>'
const iconLogo = '<K/>'

defineProps({
  logoType: String
})
</script>