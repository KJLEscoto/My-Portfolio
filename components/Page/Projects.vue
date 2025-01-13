<template>
  <div class="h-auto w-full">
    <!-- Page Details Section -->
    <section class="w-[75%]">
      <PageDetails subheader="Projects" header="Crafting Simplicity Through Design.">
        I focus on minimalist design principles, creating clean, functional, and user-friendly interfaces that
        prioritize
        simplicity and usability. Below are some of the projects I’ve worked on:
      </PageDetails>
    </section>

    <!-- Projects Section -->
    <section class="w-full mt-10">
      <div class="flex flex-col items-start gap-5">
        <!-- Tabs -->
        <ul class="flex">
          <li v-for="(tab, index) in tabs" :key="index"
            :class="['cursor-pointer px-6 py-2 hover:text-white', tab.title === activeTab ? 'border-b-2 border-white text-white' : 'text-gray-500']"
            @click="selectTab(tab.title)">
            {{ tab.title }}
          </li>
        </ul>

        <!-- Tab Description -->
        <p class="text-white w-full">
          {{ currentTabDescription }}
        </p>

        <!-- Content -->
        <div class="w-full">
          <div v-if="status === 'pending'" class="text-gray-500 text-center">
            Loading...
          </div>
          <div v-else-if="status === 'error'" class="text-red-500 text-center">
            Error loading projects. Please try again later.
          </div>
          <div v-else class="space-y-10">
            <div v-for="project in filteredProjects" :key="project.id" class="flex gap-7">
              <img class="w-[450px] h-[250px] rounded-xl" :src="project.image">
              <section class="space-y-2 my-auto">
                <p
                  class="text-xs px-5 py-2 rounded bg-gray-500/10 text-dark-blue w-fit font-semibold tracking-wider cursor-default">
                  {{ project.category }}</p>
                <h3 class="text-2xl font-semibold">{{ project.name }}</h3>
                <p class="text-gray-500">{{ project.description }}</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const tabs = [
  {
    title: 'All',
    description: 'Here is a collection of all my projects, showcasing both my coding and design skills.',
  },
  {
    title: 'Design',
    description: 'These are projects where I focused on crafting the user interface and experience through Figma, without the coding aspect involved.',
  },
  {
    title: 'Code',
    description: 'These projects involve both development and design, where I created full-functioning web applications using frameworks and libraries.',
  },
];

const activeTab = ref(tabs[ 0 ].title);

// Fetch projects from API
const { data, status } = await useLazyFetch('/api/projects');

// Filter projects based on the active tab
const filteredProjects = computed(() => {
  if (!data.value) return [];
  return activeTab.value === tabs[ 0 ].title
    ? data.value
    : data.value.filter((project) => project.category === activeTab.value);
});

// Current tab description
const currentTabDescription = computed(() => {
  const active = tabs.find((tab) => tab.title === activeTab.value);
  return active ? active.description : '';
});

// Handle tab selection
const selectTab = (tab) => {
  activeTab.value = tab;
};
</script>
