<template>
  <button v-if="btype === 'primary'" @click="$emit('click')"
    class="dark:bg-white dark:text-black px-10 py-2 rounded-full font-semibold cursor-pointer trans dark:hover:bg-darkest-blue dark:hover:text-white flex items-center gap-2 select-none">
    <UIcon :name="leftIcon" v-if="leftIcon" class="h-5 w-5" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" class="h-5 w-5" />
  </button>

  <button v-if="btype === 'secondary'" @click="$emit('click')"
    class="dark:bg-none dark:text-gray-500 px-10 py-2 border border-gray-500/30 rounded-full font-semibold cursor-pointer trans dark:hover:border-white dark:hover:text-white flex items-center gap-2 select-none">
    <UIcon :name="leftIcon" v-if="leftIcon" class="h-5 w-5" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" class="h-5 w-5" />
  </button>

  <button v-if="btype === 'tertiary'" @click="$emit('click')"
    class="dark:bg-none dark:text-red-500 py-2 font-semibold cursor-pointer trans dark:hover:text-red-500/50 flex items-center gap-1 select-none" 
    :class="`${btnClass}`">
    <UIcon :name="leftIcon" v-if="leftIcon" class="h-3 w-3" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" class="h-3 w-3" />
  </button>
</template>

<script setup>
defineProps({
  label: String,
  rightIcon: String,
  leftIcon: String,
  btype: String,
  btnClass: String
})

defineEmits([ 'click' ]);
</script>