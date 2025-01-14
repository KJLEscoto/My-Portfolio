<template>
  <div class="h-full w-full">
    <section class="min-h-screen h-full w-full flex flex-col justify-between relative">
      <PageNavbar class="fixed top-5 z-50" />
      <PageHero class="z-10" id="/" />
      <img class="w-80 h-auto absolute -right-20 top-20 z-0" src="/glow.png" />
      <img class="w-60 h-auto absolute -left-32 bottom-10 z-0" src="/glow.png" />
    </section>
    <PageSkills id="skills" class="pt-40" />
    <PageProjects id="projects" class="pt-40" />
  </div>
</template>

<script setup>

</script>