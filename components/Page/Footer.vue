<template>
  <main class="border-t border-gray-500/30">
    <div class="p-5">
      <div class="flex justify-between items-center max-w-6xl mx-auto">
        <p class="dark:text-gray-500 text-black/70 lg:text-sm text-[10px] font-medium cursor-default">Copyright &copy;
          Kent
          Joemar Escoto.</p>
        <UTooltip text="Back to Top"
          :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
          <span @click="scrollToTop" class="cursor-pointer lg:scale-100 scale-75">
            <Logo logo-type="mainLogo" />
          </span>
        </UTooltip>
      </div>
    </div>
  </main>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0
  });
}
</script>
