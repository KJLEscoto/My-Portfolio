<template>
  <div class="mt-20">
    <section class="flex items-center justify-between">
      <span class="text-sm">
        <Button label="Back to projects" left-icon="i-uil-left" btype="secondary" @click="navigateTo('/#projects')" />
      </span>

      <ToggleDarkMode />
    </section>

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
          <p class="text-dark-blue text-sm tracking-wide font-medium">Year</p>
          <h1 class="text-lg">{{ project.year }}</h1>
        </div>

        <div class="space-y-2">
          <p class="text-dark-blue text-sm tracking-wide font-medium">Role</p>
          <h1 class="text-lg">{{ project.role }}</h1>
        </div>

        <div class="space-y-2" v-if="project.frameworks.length">
          <p class="text-dark-blue text-sm tracking-wide font-medium">Language / Frameworks</p>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="flex gap-2 items-center px-4 py-2 bg-gray-500/10 rounded select-none"
              v-for="framework in project.frameworks">
              <UIcon :name="framework.icon" />
              <p class="text-sm text-white/80 font-semibold">{{ framework.name }}</p>
            </span>
          </div>
        </div>

        <div class="space-y-2" v-if="project.tools.length">
          <p class="text-dark-blue text-sm tracking-wide font-medium">Tools</p>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="flex gap-2 items-center px-4 py-2 bg-gray-500/10 rounded select-none"
              v-for="tool in project.tools">
              <UIcon :name="tool.icon" />
              <p class="text-sm text-white/80 font-semibold">{{ tool.name }}</p>
            </span>
          </div>
        </div>
      </section>

      <Divider />

      <section>
        <span v-if="project.screenshots.length" class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="text-lg font-medium flex gap-2 items-center select-none">
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
            <img draggable="false" class="w-full h-auto rounded-xl border border-gray-500/20" :src="currentScreenshot.path">
            <span>
              <div class="space-y-2 mt-5">
                <Divider />
                <p class="text-xs text-gray-500/70 tracking-wider font-medium text-center">{{
                  getFileName(currentScreenshot.path) }}</p>
                <Divider />
              </div>
            </span>
          </div>
        </span>

        <span v-else>
          <div class="text-gray-500 flex items-center justify-center gap-2 text-lg font-semibold select-none">
            <UIcon name="i-mdi-monitor-off" />
            No Screenshots Available
          </div>
        </span>

      </section>

      <section v-if="project.figmaOverview" class="space-y-3">
        <div class="text-lg font-medium flex gap-2 items-center select-none">
          <UIcon name="i-material-symbols-overview-key-outline" />
          Figma Overview
        </div>
        <iframe class="w-full border border-gray-500/30 rounded-xl" width="800" height="500"
          :src="project.figmaOverview"
          allowfullscreen></iframe>
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
