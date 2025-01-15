<template>
  <div v-for="card in cards" :key="card.id" class="flex gap-7">
    <img draggable="false" class="w-[450px] h-[250px] rounded-xl" :src="card.image">
    <section class="space-y-2 my-auto">
      <span class="flex gap-2 items-center">
        <div v-for="tag in card.category" :key="tag">
          <Tag :name="tag" />
        </div>
      </span>
      <h3 class="text-2xl font-semibold">{{ card.name }}</h3>
      <p class="text-gray-500">{{ card.description }}</p>
      <span>
        <div class="flex gap-3 items-center mt-7">
          <!-- Conditional Rendering for Buttons -->
          <Button v-if="card.category.includes('Design') && card.category.includes('Code')" btype="dual"
            left-icon="i-logos-figma" right-icon="i-mdi-github" @design="console.log('figma')"
            @code="console.log('github')" />
          <Button v-else-if="card.category.includes('Code')" label="GitHub" left-icon="i-mdi-github" btype="primary"
            btn-class="dark:hover:text-dark-blue" />
          <Button v-else-if="card.category.includes('Design')" label="Figma" left-icon="i-logos-figma"
            btype="primary" />
          <Button label="See Details" btype="secondary" right-icon="i-pajamas-arrow-right" />
          <Button v-if="card.live" label="Live Demo" left-icon="i-material-symbols-light-circle" btype="tertiary" />
        </div>
      </span>
    </section>
  </div>
</template>

<script setup>
defineProps({
  cards: Array,
});
</script>
