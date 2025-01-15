<template>
  <input :type="inputType" :name="inputAttributes" :id="inputAttributes" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border border-gray-400/70 bg-transparent rounded p-3 text-sm tracking-wider w-full dark:text-white" />
</template>

<script setup>
defineProps({
  inputAttributes: String,
  inputType: String,
  modelValue: [ String, Number ],
});

defineEmits([ 'update:modelValue' ]);
</script>
