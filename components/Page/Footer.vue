<template>
  <div class="border-t border-gray-500/30 flex justify-between items-center px-60 py-5">
    <p class="text-gray-500 text-sm font-medium">Copyright &copy; Kent Joemar Escoto.</p>
    <UTooltip text="Go to top">
      <span @click="scrollToTop" class="cursor-pointer">
        <Logo />
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
