<template>
  <textarea :name="inputAttributes" :id="inputAttributes" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full h-32 dark:text-white"></textarea>
</template>

<script setup>
defineProps({
  inputAttributes: String,
  modelValue: [ String, Number ],
});

defineEmits([ 'update:modelValue' ]);
</script>
