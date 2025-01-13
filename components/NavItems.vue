<template>
  <ul v-for="item in items">
    <li class="text-gray-500 hover:text-dark-blue trans">
      <NuxtLink :to="item.path">
        {{ item.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const items = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Skills',
    path: '/#skills'
  },
  {
    name: 'Projects',
    path: '/#projects'
  },
]
</script>

<style scoped>
  .router-link-exact-active {
    @apply dark:text-white font-semibold
  }
</style>