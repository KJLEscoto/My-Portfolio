<template>
  <div v-for="card in cards" :key="card.id" class="lg:flex grid gap-7">
    <NuxtLink :to="`/project/${formatName(card.name)}`" v-if="card.image">
      <div class="lg:w-[450px] w-full lg:h-[250px] h-auto rounded-xl overflow-hidden group border border-gray-500/20">
        <img draggable="false" class="w-full h-full rounded-xl trans group-hover:scale-105" :src="card.image" />
      </div>
    </NuxtLink>

    <section class="space-y-2 my-auto">
      <span class="flex gap-2 items-center">
        <div v-for="tag in card.category" :key="tag">
          <Tag :name="tag" />
        </div>
      </span>
      <h3 class="lg:text-2xl text-xl font-semibold">{{ card.name }}</h3>
      <p class="text-gray-500 lg:text-base text-sm">{{ card.description }}</p>
      <span>
        <div class="flex lg:flex-row flex-col gap-3 mt-7 flex-wrap w-full">
          <span class="lg:hidden block">
            <Button v-if="card.live" label="Live Demo" left-icon="i-material-symbols-light-circle" btype="tertiary"
              @click="link(getProjectLink(card, 'Live'))" />
          </span>

          <Button v-if="card.category.includes('Design') && card.category.includes('Code')" btype="dual"
            left-icon="i-logos-figma" right-icon="i-mdi-github" @design="link(getProjectLink(card, 'Figma'))"
            @code="link(getProjectLink(card, 'Github'))" />

          <Button v-else-if="card.category.includes('Code')" @click="link(getProjectLink(card, 'Github'))"
            label="Github" left-icon="i-mdi-github" btype="primary" btn-class="dark:hover:text-dark-blue" />

          <Button v-else-if="card.category.includes('Design')" @click="link(getProjectLink(card, 'Figma'))"
            label="Figma" left-icon="i-logos-figma" btype="primary" />

          <Button label="See Details" btype="secondary" right-icon="i-pajamas-arrow-right"
            @click="navigateTo(`/project/${formatName(card.name)}`)" />

          <span class="hidden lg:block">
            <Button v-if="card.live" label="Live Demo" left-icon="i-material-symbols-light-circle" btype="tertiary"
              @click="link(getProjectLink(card, 'Live'))" />
          </span>
        </div>
      </span>
    </section>

    <span class="lg:hidden block">
      <Divider />
    </span>
  </div>
</template>

<script setup>
defineProps({
  cards: Array,
});

// Function to get the project link by label from the card
const getProjectLink = (card, label) => {
  return card.projectUrl.find((url) => url.label === label)?.link || '#';
};

// Function to open links
const link = (url) => {
  if (url !== '#') window.open(url, '_blank');
};

// Function to format names with dashes instead of spaces
const formatName = (name) => {
  return name.replace(/\s+/g, '-'); // Replace spaces with dashes
};
</script>
