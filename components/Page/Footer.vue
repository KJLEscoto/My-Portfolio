<template>
  <div class="border-t border-gray-500/30 flex justify-between items-center lg:px-60 py-5 px-5">
    <p class="dark:text-gray-500 text-black/70 lg:text-sm text-[10px] font-medium cursor-default">Copyright &copy; Kent
      Joemar Escoto.</p>
    <UTooltip text="Back to Top"
      :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
      <span @click="scrollToTop" class="cursor-pointer lg:scale-100 scale-75">
        <Logo logo-type="mainLogo" />
      </span>
    </UTooltip>
  </div>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({
    top: 0
  });
}
</script>
