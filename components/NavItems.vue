<template>
  <ul v-for="item in items" :key="item.name">
    <a :href="item.path" @click.prevent="handleClick(item)">
      <li
        class="dark:text-gray-500 text-black lg:hover:text-dark-blue lg:dark:hover:text-dark-blue trans select-none w-full hover:bg-darkest-blue hover:dark:text-white lg:hover:bg-transparent hover:text-white px-5 py-2 lg:py-0 lg:px-0 rounded-full"
        :class="{
      'font-bold lg:dark:text-white lg:text-black lg:bg-transparent bg-gray-500/20 dark:text-white': isActive(item)
    }">
        {{ item.name }}.
      </li>
    </a>
  </ul>
</template>

<script setup>
const items = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' }, 
];

const activeItem = ref(null);
const router = useRouter();
const route = useRoute();

const handleClick = (item) => {
  if (item.path === '/') {
    if (route.path === '/') {
      // Scroll to the top if already on the Home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to the Home page
      router.push('/');
    }
  } else {
    // For other items, set the active item and navigate
    activeItem.value = item;
    router.push(item.path);
  }
};

const isActive = (item) => {
  return activeItem.value?.path === item.path;
};

// Function to check if the content of an element is in the viewport (with adjusted padding)
const isElementInView = (el) => {
  const rect = el.getBoundingClientRect();
  const contentTop = rect.top + el.offsetTop / 2; // Adjusting by half of the padding offset
  return contentTop >= 0 && contentTop <= window.innerHeight;
};

// Check which section is in view when scrolling
const checkActiveSection = () => {
  // For root path
  if (window.scrollY === 0) {
    activeItem.value = items.find(item => item.path === '/');
    return;
  }

  // For other sections, check if the associated section is in the viewport
  items.forEach(item => {
    const element = document.getElementById(item.path.split('#')[ 1 ]);
    if (item.path !== '/' && element) {
      if (isElementInView(element)) {
        // If element is in view, set it as the active item
        activeItem.value = item;
      } else if (activeItem.value?.path === item.path) {
        // If element is not in view, deactivate the active item
        activeItem.value = null;
      }
    }
  });
};

// Listen to scroll events and update active item
onMounted(() => {
  window.addEventListener('scroll', checkActiveSection);
  checkActiveSection(); // Initial check on page load
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkActiveSection);
});
</script>
