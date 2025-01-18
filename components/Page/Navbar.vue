<template>
  <div class="py-10 w-full">
    <!-- Desktop Navbar -->
    <section class="lg:flex hidden items-center justify-between">
      <NuxtLink to="/">
        <Logo logo-type="mainLogo" />
      </NuxtLink>
      <div class="flex gap-10 items-center">
        <NavItems />
        <section class="flex gap-5 items-center">
          <Button @click="navigateTo('/#contact')" label="Hire me" btype="primary" />
          <ToggleDarkMode />
        </section>
      </div>
    </section>

    <!-- Mobile Navbar -->
    <section
      class="flex lg:hidden items-center justify-between w-full fixed -top-1 left-0 bg-white/50 dark:bg-black/50 backdrop-blur dark:border-gray-500/20 border z-50 p-5">
      <NuxtLink to="/">
        <Logo logo-type="iconLogo" />
      </NuxtLink>
      <UIcon @click="toggleMenu" class="text-3xl cursor-pointer" name="i-jam-menu" />
      <!-- Mobile Menu -->
      <div
        class="fixed -top-5 left-0 z-30 py-10 rounded-xl w-full bg-white dark:bg-black shadow-md transition-transform duration-300 overflow-hidden"
        :class="{ 'translate-y-0': menu, '-translate-y-full': !menu }">
        <div class="px-5 flex flex-col gap-5" @click="closeMenu">
          <div class="flex justify-between items-center">
            <NuxtLink to="/">
              <Logo logo-type="iconLogo" />
            </NuxtLink>
            <section class="flex items-center gap-2">
              <ToggleDarkMode />
              <UIcon @click="closeMenu" class="text-3xl cursor-pointer" name="i-jam-close" />
            </section>
          </div>
          <div>
            <NavItems />
          </div>
          <div class="flex items-center gap-5 w-full">
            <span class="w-full">
              <Button @click="navigateTo('/#contact')" label="Hire me" btype="primary" />
            </span>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref } from "vue";

const menu = ref(false);

const toggleMenu = () => {
  menu.value = !menu.value;
};

const closeMenu = () => {
  menu.value = false;
};
</script>