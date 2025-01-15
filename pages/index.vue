<template>
  <div class="h-full w-full relative">
    <section class="min-h-screen h-full w-full flex flex-col justify-between relative">
      <PageNavbar />

      <!-- Floating Navbar visibility based on scroll -->
      <span v-if="!isAtTop" :class="[!isAtTop ? 'flex items-center justify-center trans opacity-100' : 'opacity-0 trans -translate-y-10']">
        <PageFloatingNavbar />
      </span>

      <PageHero class="z-10 pb-20" id="/" />
      <img class="w-80 h-auto absolute -right-20 top-20 z-0" src="/glow.png" />
      <img class="w-60 h-auto absolute -left-32 bottom-10 z-0" src="/glow.png" />
    </section>

    <PageSkills id="skills" class="pt-40" />
    <PageProjects id="projects" class="pt-40" />
  </div>
</template>

<script setup>

const isAtTop = ref(true);

const checkScrollPosition = () => {
  isAtTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScrollPosition);
});
</script>