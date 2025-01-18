<template>
  <div class="h-full w-full">
    <PageNavbar />
    <main class="h-full w-full xl:px-60 px-5 flex flex-col pb-40">
      <slot />
      <PageContact id="contact" class="pt-28" />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>

</script>