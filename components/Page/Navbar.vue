<template>
  <div class="flex items-center justify-between py-10 w-fit">
    <NuxtLink to="/">
      <Logo />
    </NuxtLink>

    <div class="flex gap-10 items-center">
      <NavItems />

      <section class="flex gap-5 items-center">
        <Button @click="navigateTo('/#contact')" label="Hire me" btype="primary" />
        <ToggleDarkMode />
      </section>
    </div>

  </div>
</template>

<script setup>

</script>
