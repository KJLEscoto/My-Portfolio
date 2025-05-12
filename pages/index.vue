<template>
  <div class="h-full w-full relative">
    <section class="h-auto w-full flex flex-col justify-between relative">
      <!-- Floating Navbar visibility based on scroll -->
      <!-- <span v-if="!isAtTop" :class="[!isAtTop ? 'flex items-center justify-center trans opacity-100' : 'opacity-0 trans -translate-y-10']">
        <PageFloatingNavbar />
      </span> -->

      <PageHero class="z-10 xl:pt-0 pt-20 xl:pb-28 pb-0" id="/" />
      <img draggable="false" class="w-80 h-auto absolute -left-48 lg:-top-10 -top-32 z-0 dark:opacity-100 opacity-60"
        src="/glow.png" />
      <img draggable="false"
        class="w-80 h-auto absolute -right-48 xl:bottom-20 -bottom-52 z-0 dark:opacity-100 opacity-60"
        src="/glow.png" />
    </section>

    <PageSkills id="skills" class="pt-28" />
    <PageProjects id="projects" class="pt-28" />
  </div>
</template>

<script setup>
useHead({
  title: 'KinWebb | Personal Portfolio',
  meta: [
    {
      name: 'description',
      content: 'This is KinWebb\'s first official portfolio. A proficient skill in web developer, web designer, ui/ux, seo.'
    }
  ]
})
</script>