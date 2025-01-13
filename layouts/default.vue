<template>
  <div class="h-full w-full overflow-auto">
    <main class="h-full w-full xl:px-60 px-5 flex flex-col gap-y-10">
      <slot />
      <PageContact id="contact" class="pt-40" />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>

</script>