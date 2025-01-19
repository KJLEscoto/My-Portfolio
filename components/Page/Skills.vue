<template>
  <div class="w-full h-auto space-y-10">
    <section class="lg:w-[75%]">
      <PageDetails subheader="Skills" header="What I Bring to the Table.">
        Over the past few years, I have honed my expertise in web development, specializing in frameworks and
        libraries. Below are the tools and technologies I frequently work with:
      </PageDetails>
    </section>

    <section>
      <NuxtMarquee direction="left" speed="30">
        <div v-for="skill in doubledTopSkills" :key="`top-${skill.id}`"
          class="lg:h-40 h-36 flex items-center">
          <UTooltip :text="skill.name" :popper="{ placement: 'top', offsetDistance: 16 }"
            :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
            <UIcon :name="skill.icon" :class="`${iconClass}`" />
          </UTooltip>
        </div>
      </NuxtMarquee>
      <NuxtMarquee direction="right" speed="30">
        <div v-for="skill in doubledBottomSkills" :key="`bottom-${skill.id}`" class="lg:h-40 h-36 flex items-center">
          <UTooltip :text="skill.name" :popper="{ placement: 'bottom', offsetDistance: 16 }"
            :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
            <UIcon :name="skill.icon" :class="`${iconClass}`" />
          </UTooltip>
        </div>
      </NuxtMarquee>
    </section>
  </div>
</template>

<script setup>

const iconClass = 'text-5xl mx-2 hover:scale-150 trans dark:opacity-50 opacity-70 hover:opacity-100 filter hover:drop-shadow-[0_0_14px_blue]'

const { data: skillsData, pending, error } = await useLazyFetch('/api/skills');

const skills = ref([]);

if (!error.value) {
  skills.value = skillsData.value || [];
}

// Split the skills array into two halves
const midpoint = Math.ceil(skills.value.length / 2);

const topSkills = ref(skills.value.slice(0, midpoint));
const bottomSkills = ref(skills.value.slice(midpoint));

console.log(topSkills);
console.log(bottomSkills);


// Double each array for seamless looping
const doubledTopSkills = ref([ ...topSkills.value, ...topSkills.value ]);
const doubledBottomSkills = ref([ ...bottomSkills.value, ...bottomSkills.value ]);

</script>