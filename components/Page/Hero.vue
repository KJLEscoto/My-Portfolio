<template>
  <div class="h-full w-full my-auto flex xl:flex-row flex-col-reverse lg:gap-10 gap-5">
    <section class="my-auto">
      <PageDetails subheader="I'm Kent Joemar Escoto" header="Front-end Web Developer.">
        With a strong foundation in HTML5, CSS3, and JavaScript, complemented by expertise in UI/UX design. Seeking to
        apply my skills and knowledge to contribute to innovative and user-friendly digital solutions in a dynamic and
        growth-oriented environment.
      </PageDetails>

      <span>
        <div class="flex items-center lg:gap-5 gap-3 lg:mt-10 mt-7">
          <span>
            <Button label="My Projects" btype="primary" @click="navigateTo('/#projects')" />
          </span>
          <span>
            <Button label="Resume" right-icon="i-mdi-file-document-arrow-right-outline" btype="secondary" @click="link(resume)" />
          </span>
        </div>
      </span>
    </section>
    <section class="w-full flex items-center justify-center">
      <UTooltip text="Let's Work!"
        :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
        <img draggable="false" class="w-auto lg:h-[350px] h-[250px] rounded-3xl hover:scale-110 hover:rotate-3 trans"
          src="/MainModel.png">
      </UTooltip>
    </section>
  </div>
</template>

<script setup>

const resume = 'https://drive.google.com/file/d/1UsVAtVGbFRgDPO6cB9Zpi7QHpJV4x_iX/view?usp=sharing'

const link = (url) => {
  window.open(url, '_blank');
};
</script>