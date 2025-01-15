<template>
  <div class="mt-20">
    <Button label="Back" left-icon="i-uil-left" btype="secondary" @click="navigateTo('/#projects')" />
    <div v-if="loading">
      <PageStatus status="pending" />
    </div>
    <div v-else-if="error">
      <PageStatus status="error" :message="error" />
    </div>
    <div v-else>
      <h1 class="text-2xl font-bold">{{ project.name }}</h1>
      <p class="text-gray-700 mt-4">{{ project.description }}</p>
      <!-- Add other project details here -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

 // Using `id` from the route
const project = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchProject = async () => {
  try {
    // Fetch project data by ID
    const name = route.params.name.replace(/\s+-/g, ' ');
    const { data, error: fetchError } = await $fetch(`/api/projects?name=${name}`, {
      method: 'GET',
    });

    if (fetchError || !data) {
      throw new Error('Project not found');
    }

    project.value = data; // Directly assign the fetched data
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const navigateTo = (path) => {
  router.push(path);
};

onMounted(() => {
  fetchProject();
});
</script>
