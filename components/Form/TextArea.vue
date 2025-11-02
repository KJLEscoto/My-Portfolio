<template>
  <textarea :name="inputAttributes" :id="inputAttributes" :value="modelValue" :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full h-32 dark:text-white placeholder:dark:text-white/30"></textarea>
</template>

<script setup>
import { plugin } from 'postcss';

defineProps({
  inputAttributes: String,
  modelValue: [ String, Number ],
  placeholder: String
});

defineEmits([ 'update:modelValue' ]);
</script>
