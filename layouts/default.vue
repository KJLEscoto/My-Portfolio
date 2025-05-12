<template>
  <div class="h-full w-full">
    <PageNavbar />
    <main class="h-full max-w-6xl mx-auto flex flex-col xl:px-0 px-5 lg:pb-40 pb-20">
      <slot />
      <PageContact id="contact" class="pt-28" />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>

</script>