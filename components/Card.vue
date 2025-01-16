<template>
  <div  v-for="card in cards" :key="card.id" class="flex gap-7">
    <span v-if="card.image">
      <div class="w-[450px] h-[250px] rounded-xl overflow-hidden group">
        <img draggable="false" class="w-full h-full rounded-xl trans group-hover:scale-105" :src="card.image" />
      </div>
    </span>

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

          <Button v-else-if="card.category.includes('Code')" @click="link(card.projectUrl)" label="GitHub"
            left-icon="i-mdi-github" btype="primary" btn-class="dark:hover:text-dark-blue" />

          <Button v-else-if="card.category.includes('Design')" @click="link(card.projectUrl)" label="Figma"
            left-icon="i-logos-figma" btype="primary" />

          <Button label="See Details" btype="secondary" right-icon="i-pajamas-arrow-right"
            @click="navigateTo(`/project/${formatName(card.name)}`)" />

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

const link = (url) => {
  window.open(url, '_blank');
};

// Function to format names with dashes instead of spaces or special characters
const formatName = (name) => {
  return name.replace(/\s+/g, '-'); // Replace spaces with dashes
};
</script>
