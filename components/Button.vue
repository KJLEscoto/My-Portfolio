<template>
  <button v-if="btype === 'primary'" @click="$emit('click')" :disabled="isDisabled"
    class="dark:bg-white dark:text-black lg:px-10 px-5 py-2 rounded-full font-semibold cursor-pointer trans dark:hover:bg-darkest-blue dark:hover:text-white text-white bg-black hover:bg-darkest-blue flex items-center gap-2 justify-center select-none w-full lg:text-base text-sm">
    <UIcon :name="leftIcon" v-if="leftIcon" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" />
  </button>

  <button v-if="btype === 'secondary'" @click="$emit('click')" :disabled="isDisabled"
    class="dark:bg-none dark:text-gray-500 lg:px-10 px-5 py-2 border border-gray-500/30 hover:border-black rounded-full font-semibold cursor-pointer trans dark:hover:border-white dark:hover:text-white flex items-center gap-2 justify-center select-none w-full lg:text-base text-sm">
    <UIcon :name="leftIcon" v-if="leftIcon" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" />
  </button>

  <button v-if="btype === 'tertiary'" @click="$emit('click')" :disabled="isDisabled"
    class="dark:bg-none text-red-500 font-semibold cursor-pointer trans hover:text-red-500/50 flex items-center gap-1 select-none w-fit">
    <UIcon :name="leftIcon" v-if="leftIcon" class="h-3 w-3" />
    <p>{{ label }}</p>
    <UIcon :name="rightIcon" v-if="rightIcon" class="h-3 w-3" />
  </button>

  <section v-if="btype === 'dual'" class="flex items-center gap-1 w-full">
    <UTooltip class="w-full" text="Figma"
      :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
      <button :class="`${dualClass} rounded-l-full`" @click="$emit('design')" :disabled="isDisabled">
        <UIcon :name="leftIcon" v-if="leftIcon" class="h-5 w-5" />
      </button>
    </UTooltip>
    <UTooltip class="w-full" text="Github"
      :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
      <button :class="`${dualClass} rounded-r-full`" @click="$emit('code')" :disabled="isDisabled">
        <UIcon :name="rightIcon" v-if="rightIcon" class="h-5 w-5" />
      </button>
    </UTooltip>
  </section>
</template>

<script setup>
defineProps({
  label: String,
  rightIcon: String,
  leftIcon: String,
  btype: String,
  isDisabled: Boolean
})

const dualClass = 'dark:bg-white dark:text-black text-white bg-black w-full hover:bg-darkest-blue lg:px-7 py-2 font-semibold cursor-pointer trans justify-center dark:hover:bg-darkest-blue dark:hover:text-white flex items-center select-none'

defineEmits([ 'click', 'design', 'code' ]);
</script>