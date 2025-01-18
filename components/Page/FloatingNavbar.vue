<template>
  <div
    class="fixed top-12 z-30 w-fit flex items-center gap-x-14 rounded-full px-5 py-2 border border-black/50 bg-white/40 dark:border-gray-500/40 dark:bg-black/50 backdrop-blur">

    <section class="flex items-center gap-5">
      <NuxtLink to="/">
        <Logo logo-type="iconLogo" />
      </NuxtLink>
      <span class="text-sm flex items-center gap-5">
        <NavItems />
      </span>
    </section>

    <span class="flex text-xs gap-2">
      <Button @click="navigateTo('/#contact')" label="Hire me" btype="primary" />
      <ToggleDarkMode />
    </span>
  </div>
</template>

<script setup>


</script>