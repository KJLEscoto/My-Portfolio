<template>
  <div class="pt-10">
    <div class="text-sm w-fit">
      <Button label="Back" left-icon="i-uil-left" btype="secondary" @click="navigateTo('/#projects')" />
    </div>

    <div v-if="loading">
      <PageStatus status="pending" />
    </div>

    <div v-else-if="error">
      <PageStatus status="error" :message="error" />
    </div>

    <div v-else class="mt-10 flex flex-col gap-10">
      <section class="flex flex-col gap-2">
        <span class="flex gap-2 items-center">
          <div v-for="tag in project.category" :key="tag">
            <Tag :name="tag" />
          </div>
        </span>

        <PageDetails :header="project.name">
          {{ project.description }}
        </PageDetails>
      </section>

      <Divider />

      <section class="grid md:grid-cols-2 grid-cols-1 gap-7">
        <div class="space-y-2">
          <HeadDetails title="Year" />
          <h1 class="lg:text-lg text-base font-medium">{{ project.year }}</h1>
        </div>

        <div class="space-y-2">
          <HeadDetails title="Role" />
          <div>
            <ul v-for="role in project.role">
              <li class="lg:text-lg text-base font-medium list-disc list-inside">{{ role }}</li>
            </ul>
          </div>
        </div>

        <div class="space-y-2" v-if="project.frameworks.length">
          <HeadDetails title="Language / Frameworks" />
          <SkillsTag :skills="project.frameworks" />
        </div>

        <div class="space-y-2" v-if="project.tools.length">
          <HeadDetails title="Tools" />
          <SkillsTag :skills="project.tools" />
        </div>
      </section>

      <Divider />

      <section class="space-y-3">
        <div class="text-lg font-medium flex gap-2 items-center select-none">
          Visit
        </div>
        <div>
          <span>
            <div class="flex lg:gap-5 gap-3 items-center flex-wrap">
              <span v-if="project.category.includes('Code')">
                <Button @click="link(getProjectLink(project, 'Github'))" label="GitHub" left-icon="i-mdi-github"
                  btype="primary" btn-class="dark:hover:text-dark-blue" />
              </span>

              <span v-if="project.category.includes('Design')">
                <Button @click="link(getProjectLink(project, 'Figma'))" label="Figma" left-icon="i-logos-figma"
                  btype="primary" />
              </span>

              <span v-if="project.live">
                <Button label="Live Demo" left-icon="i-material-symbols-light-circle" btype="tertiary"
                  @click="link(getProjectLink(project, 'Live'))" />
              </span>
            </div>
          </span>
        </div>
      </section>

      <Divider />

      <section>
        <span v-if="project.screenshots.length" class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="lg:text-lg text-base font-medium flex gap-2 items-center select-none">
              <UIcon name="i-mdi-monitor-screenshot" />
              Screenshots
            </div>
            <div class="text-sm flex items-center gap-2">
              <button @click="prevScreenshot" :disabled="currentIndex === 0"
                class="disabled:opacity-50 flex items-center hover:text-dark-blue disabled:hover:text-current disabled:cursor-not-allowed select-none">
                <UIcon name="i-tabler-caret-left-filled" /> Prev
              </button>
              <div>
                <!-- make this span an input which the user can choose what image index he will go, for example '5' -->
                <span class="font-medium mr-1">
                  <input type="text" v-model="inputIndex" @change="updateScreenshotIndex" :min="1"
                    :max="project.screenshots.length" class="text-center w-10 p-1 border rounded-md" />
                </span> of
                <span class="font-medium">{{ project.screenshots.length }}</span>
              </div>
              <button @click="nextScreenshot" :disabled="currentIndex === project.screenshots.length - 1"
                class="disabled:opacity-50 flex items-center hover:text-dark-blue disabled:hover:text-current disabled:cursor-not-allowed select-none">
                Next
                <UIcon name="i-tabler-caret-right-filled" />
              </button>
            </div>
          </div>
          <div v-if="project.screenshots.length">
            <img draggable="false" class="w-full h-auto rounded-xl border border-gray-500/20"
              :src="currentScreenshot.path">
            <span>
              <div class="space-y-2 mt-5">
                <Divider />
                <FooterDetails> {{ getFileName(currentScreenshot.path) }} </FooterDetails>
                <Divider />
              </div>
            </span>
          </div>
        </span>

        <span v-else>
          <div
            class="text-gray-500 flex items-center justify-center gap-2 lg:text-lg text-base font-semibold select-none">
            <UIcon name="i-mdi-monitor-off" />
            No Screenshots Available
          </div>
        </span>

      </section>

      <section v-if="project.figmaOverview" class="space-y-3">
        <div class="lg:text-lg text-base font-medium flex gap-2 items-center select-none">
          <UIcon name="i-material-symbols-overview-key-outline" />
          Figma Overview
        </div>
        <iframe class="w-full border border-gray-500/30 rounded-xl" width="800" height="500"
          :src="project.figmaOverview" allowfullscreen></iframe>
      </section>


    </div>
  </div>
</template>

<script setup>

// State variables
const project = ref(null); // Initialize as null to check if data exists
const error = ref('');
const loading = ref(true);
const currentIndex = ref(0); // To track the current screenshot index

const route = useRoute();

// Function to get the project link by label from the card
const getProjectLink = (project, label) => {
  return project.projectUrl.find((url) => url.label === label)?.link || '#';
};

// Function to open links
const link = (url) => {
  if (url !== '#') window.open(url, '_blank');
};

// Fetch project data
const fetchProject = async () => {
  loading.value = true;
  try {
    const name = route.params.name.replace(/-/g, ' ');
    const api = `/api/projects?name=${name}`;
    const data = await $fetch(api);

    if (!data || data.length === 0) {
      throw new Error('Project not found');
    }

    console.log(data);
    project.value = data[ 0 ]; // Extract the first project from the array
  } catch (err) {
    error.value = err.message || 'Failed to fetch project data';
    console.error('Error:', err);
  } finally {
    loading.value = false; // Ensure loading is set to false whether successful or not
  }
};

// Computed property to get the current screenshot
const currentScreenshot = computed(() => project.value?.screenshots[ currentIndex.value ] || {});

// State variable for the input field
const inputIndex = ref(currentIndex.value + 1); // +1 because we're displaying a 1-based index

// Watch the currentIndex value to update the inputIndex
watch(currentIndex, (newIndex) => {
  inputIndex.value = newIndex + 1; // Update inputIndex when currentIndex changes (1-based index)
});

// Function to update the screenshot index when the input value changes
const updateScreenshotIndex = () => {
  const newIndex = parseInt(inputIndex.value, 10) - 1; // Convert to 0-based index
  if (!isNaN(newIndex) && newIndex >= 0 && newIndex < project.value.screenshots.length) {
    currentIndex.value = newIndex;
  } else {
    inputIndex.value = currentIndex.value + 1; // Reset input value if it's out of range
  }
};

// Navigation functions
const prevScreenshot = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

const nextScreenshot = () => {
  if (currentIndex.value < project.value.screenshots.length - 1) {
    currentIndex.value += 1;
  }
};


function getFileName(path) {
  return path.split('/').pop().split('.').slice(0, -1).join('.');
}

// Lifecycle hook
onMounted(() => {
  fetchProject();
});
</script>
