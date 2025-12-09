<template>
  <div class="min-h-screen h-full flex xl:flex-row flex-col-reverse xl:gap-0 gap-10">
    <section class="my-auto w-full">
      <PageDetails subheader="I'm Kent Joemar Escoto" header="Web Developer. UI/UX Designer.">
        Proficient in modern web development <span class="italic font-semibold">frameworks</span>, <span
          class="italic font-semibold">web
          design</span>, and <span class="italic font-semibold">UI/UX
          design</span>. From designing user-friendly interfaces to implementing advanced functionality, I provide
        innovative solutions that will help you connect with your audience.
      </PageDetails>

      <span>
        <div class="flex items-center lg:gap-5 gap-3 lg:mt-10 mt-7">
          <span>
            <Button label="My Projects" btype="primary" @click="navigateTo('/#projects')" />
          </span>
          <span>
            <Button label="Resume" right-icon="i-mdi-file-document-arrow-right-outline" btype="secondary"
              @click="link(resume)" />
          </span>
        </div>
      </span>
    </section>
    <section class="w-full flex items-center justify-center">
      <UTooltip text="Let's Work!"
        :ui="{ background: 'bg-white dark:bg-black', ring: 'ring-1 ring-gray-200 dark:ring-gray-500/30' }">
        <img draggable="false" class="w-auto lg:h-[350px] h-[250px] rounded-3xl hover:scale-110 hover:rotate-3 trans"
          src="/MainModel3.png">
      </UTooltip>
    </section>
  </div>
</template>

<script setup>

const resume = 'https://drive.google.com/file/d/1Kxu04RPwJtZs4KQujC2Y_36wKl5eaR6E/view'

const link = (url) => {
  window.open(url, '_blank');
};
</script>