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
        <div class="w-full h-auto trans">
          <section v-if="status === 'pending'">
            <PageStatus status="pending" />
          </section>

          <section v-else-if="status === 'error'">
            <PageStatus status="error" />
          </section>

          <section v-else class="space-y-10">
            <Card :cards="visibleProjects" />

            <span>
              <div class="space-y-2 mt-10">
                <Divider />
                <p class="text-xs text-gray-500/50 tracking-wider font-medium text-center">Showing {{ visibleProjects.length }} of
                  {{
                  filteredProjects.length }} Projects</p>
                <Divider />
              </div>
            </span>

            <span v-if="displayButtons">
              <div class="w-full flex justify-center items-center mt-5">
                <Button v-if="canLoadMore" @click="loadMore" label="See More" btype="secondary"
                  right-icon="i-pajamas-expand-down" />
                <Button v-else @click="seeLess" label="See Less" btype="secondary" right-icon="i-pajamas-expand-up" />
              </div>
            </span>
          </section>
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
const projectsPerPage = 3; // Number of projects to display initially and per load
const currentPage = ref(1);

// Fetch projects from API
const { data, status } = await useLazyFetch('/api/projects');

// Filter projects based on the active tab
const filteredProjects = computed(() => {
  if (!data.value) return [];
  return activeTab.value === tabs[ 0 ].title
    ? data.value
    : data.value.filter((project) => project.category.includes(activeTab.value));
});


// Current tab description
const currentTabDescription = computed(() => {
  const active = tabs.find((tab) => tab.title === activeTab.value);
  return active ? active.description : '';
});

// Visible projects based on pagination
const visibleProjects = computed(() => {
  return filteredProjects.value.slice(0, currentPage.value * projectsPerPage);
});

// Determine if more projects can be loaded
const canLoadMore = computed(() => {
  return visibleProjects.value.length < filteredProjects.value.length;
});

// Handle tab selection
const selectTab = (tab) => {
  activeTab.value = tab;
  currentPage.value = 1; // Reset pagination when tab changes
};

// Load more projects
const loadMore = () => {
  currentPage.value += 1;
};

// See less projects
const seeLess = () => {
  currentPage.value = 1;
};

// Determine if buttons should be displayed
const displayButtons = computed(() => {
  return filteredProjects.value.length > projectsPerPage;
});

</script>
