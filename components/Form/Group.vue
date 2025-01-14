<template>
  <div v-if="group === 'normal'" class="space-y-2">
    <FormLabel :inputAttributes="attribute" :inputLabel="label" />
    <FormInput :inputAttributes="attribute" :inputType="type" />
  </div>

  <div v-if="group === 'textarea'" class="space-y-2">
    <FormLabel :inputAttributes="attribute" :inputLabel="label" />
    <FormTextArea :inputAttributes="attribute" />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  attribute: String,
  type: String,
  group: String
})
</script>