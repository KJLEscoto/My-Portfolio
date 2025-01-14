<template>
  <div class="h-full w-full my-auto flex xl:flex-row flex-col-reverse gap-10">
    <section class="my-auto">
      <PageDetails subheader="I'm Kent Joemar Escoto" header="Front-end Web Developer.">
        With a strong foundation in HTML5, CSS3, and JavaScript, complemented by expertise in UI/UX design. Seeking to
        apply my skills and knowledge to contribute to innovative and user-friendly digital solutions in a dynamic and
        growth-oriented environment.
      </PageDetails>

      <span>
        <div class="flex items-center gap-5 mt-10">
          <Button label="My Projects" btype="primary" />
          <Button label="Resume" right-icon="i-mdi-file-document-arrow-right-outline" btype="secondary" />
        </div>
      </span>
    </section>
    <section class="w-full flex items-center justify-center">
      <img draggable="false" class="w-auto h-[350px] rounded-3xl" src="/MainModel.png">
    </section>
  </div>
</template>

<script setup>

</script>