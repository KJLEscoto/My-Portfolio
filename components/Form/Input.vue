<template>
  <input :type="inputType" :name="inputAttributes" :id="inputAttributes" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" :placeholder="placeholder"
    class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full dark:text-white placeholder:dark:text-white/30" />
</template>

<script setup>
defineProps({
  inputAttributes: String,
  inputType: String,
  modelValue: [ String, Number ],
  placeholder: String
});

defineEmits([ 'update:modelValue' ]);
</script>
