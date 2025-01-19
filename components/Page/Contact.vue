<template>
  <section class="w-full h-full flex flex-col gap-10">
    <div class="rounded-xl p-10 border border-gray-500/30 flex lg:flex-row flex-col lg:items-center items-start justify-between w-full lg:gap-0 gap-5">
      <PageDetails header="Looking for a Web Developer?" header-class="text-xl font-semibold">
        <p class="text-sm w-full">
          I’m always open to address all your inquiries. Let’s connect on
          <span class="text-dark-blue font-semibold">LinkedIn</span>
          to discuss your project in more detail and explore how I can contribute to its success as your dedicated Web
          Developer.
        </p>
      </PageDetails>

      <div class="lg:w-[80%] w-fit flex justify-end">
        <span>
          <Button @click="connect" label="Connect with me" btype="primary" left-icon="i-vaadin-handshake" />
        </span>
      </div>
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1683.259380902936!2d125.60348049797669!3d7.08949999876462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDUnMjIuMiJOIDEyNcKwMzYnMTYuNCJF!5e1!3m2!1sen!2sph!4v1737081739597!5m2!1sen!2sph"
      width="600" class="w-full rounded-xl" height="250" style="border:0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"></iframe>

    <Divider />

    <div class="grid md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
      <section class="w-full space-y-10">
        <PageDetails subheader="Hire Me" header="Let’s work together on your next project.">
          I’m passionate about exploring exciting opportunities, engaging in meaningful discussions, and building strong
          professional connections. Let’s discuss and create something amazing together!
        </PageDetails>

        <div class="space-y-3">
          <p>Contact me via Email</p>
          <div
            class="rounded flex items-center justify-between lg:px-5 px-3 lg:py-3 py-2 dark:text-gray-500 text-black border border-gray-500/30 lg:text-sm text-xs bg-gray-500/10">
            <section class="flex items-center gap-2">
              <UIcon class="lg:text-2xl text-xl" name="i-ic-round-email" />
              <p class="tracking-wider" id="personal_email">kin.webb.1024@gmail.com</p>
            </section>

            <button :class="{ 'opacity-60 cursor-not-allowed': isDisabled }" @click="copy" :disabled="isDisabled"
              class="flex items-center gap-1 text-xs py-2 px-3 dark:bg-gray-500/10 bg-gray-500/30 rounded hover:opacity-60 select-none">
              <p>Copy</p>
              <UIcon name="i-lucide-copy" />
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <p>Follow me on social media</p>
          <section class="flex items-center gap-3">
            <NuxtLink target="_blank" :to="social.link" v-for="social in socials" :key="social.link"
              class="border border-gray-500/30 rounded-full flex items-center p-2 hover:border-black dark:hover:border-white justify-center">
              <UIcon class="w-5 h-5 dark:text-white text-black" :name="social.icon" />
            </NuxtLink>
          </section>
        </div>
      </section>

      <section class="w-full h-auto">
        <PageDetails header="Leave a message." />
        <p class="mb-3 text-xs text-red-500/80 font-semibold tracking-wider">Rate? Report a bug?? or Confess to your crush??? GO! Before you go.</p>

        <form @submit.prevent="submitForm" class="space-y-5">
          <section class="space-y-2">
            <FormLabel inputAttributes="name" inputLabel="Name" />
            <FormInput inputAttributes="name" inputType="text" v-model="formData.name" />
          </section>

          <!-- Email -->
          <section class="space-y-2">
            <FormLabel inputAttributes="email_address" inputLabel="Email Address" />
            <FormInput inputAttributes="email_address" inputType="email" v-model="formData.email_address" />
          </section>

          <!-- Message -->
          <section class="space-y-2">
            <FormLabel inputAttributes="message" inputLabel="Message" />
            <FormTextArea inputAttributes="message" v-model="formData.message" />
          </section>

          <div class="w-full flex justify-end">
            <span>
              <Button v-if="!load.bool" :isDisabled="load.isDisable" type="submit" :label="load.label" btype="primary"
                :right-icon="load.icon" />
              <Button v-else :isDisabled="load.isDisable" :label="load.label" btype="primary" :right-icon="load.icon" />
            </span>
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

// Social media links
const socials = [
  {
    icon: 'i-mage-facebook',
    link: 'https://www.facebook.com/kentoy.newt',
  },
  {
    icon: 'i-hugeicons-instagram',
    link: 'https://www.instagram.com/_itskjle/',
  },
  // {
  //   icon: 'i-proicons-x-twitter',
  //   link: 'https://x.com/_foetaka',
  // },
  {
    icon: 'i-bxl-linkedin',
    link: 'https://www.linkedin.com/in/kent-joemar-escoto-646b92265/',
  },
  {
    icon: 'i-mdi-github',
    link: 'https://github.com/KJLEscoto',
  },
];

const connect = () => {
  window.open(socials[ 3 ].link, '_blank');
};

// Reactive form data
const formData = reactive({
  name: '',
  email_address: '',
  message: '',
});

const load = reactive({
  bool: false,
  label: 'Send Message',
  icon: 'i-ic-sharp-send',
  isDisable: false
})

const isDisabled = ref(false); // Disable button during API request
const timeoutDuration = 2500;

const copy = () => {
  if (isDisabled.value) return;

  const emailElement = document.getElementById("personal_email");
  const email = emailElement?.textContent || "";

  if (email) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        isDisabled.value = true;
        toast.add({
          title: "Email Copied",
          icon: "i-lucide-copy-check",
          timeout: timeoutDuration,
          callback: () => (isDisabled.value = false),
          ui: {
            background: "dark:bg-gray-900 bg-gray-200",
            progress: {
              background: "dark:bg-gray-500 bg-gray-900 rounded-full",
            },
            ring: "ring-0",
            title: "text-sm font-medium text-gray-900 dark:text-gray-500",
            icon: {
              base: "flex-shrink-0 w-5 h-5",
              color: "text-gray-900 dark:text-gray-500",
            },
          },
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
};

const submitForm = async () => {
  try {
    load.bool = true
    load.label = 'Sending...'
    load.icon = 'i-line-md-loading-loop'
    load.isDisable = true
    
    const params = {
      name: formData.name,
      email_address: formData.email_address,
      message: formData.message,
    };

    console.log('data:', params);

    // Sending the form data to the Nuxt 3 API endpoint
    const response = await $fetch('/api/message', {
      method: 'POST',
      body: params,
    });

    if (response.success) {
      // Clear the form fields after successful submission
      formData.name = '';
      formData.email_address = '';
      formData.message = '';

      load.bool = false
      load.label = 'Send Message'
      load.icon = 'i-ic-sharp-send'

      toast.add({
        title: "Message Sent!",
        icon: "i-mdi-send-check",
        timeout: timeoutDuration,
        callback: () => {
          load.bool = false
          load.label = 'Send Message'
          load.icon = 'i-ic-sharp-send'
          load.isDisable = false
        },
        ui: {
          background: "dark:bg-gray-900 bg-gray-200",
          progress: {
            background: "dark:bg-green-500 bg-green-500 rounded-full",
          },
          ring: "ring-0",
          title: "text-sm font-medium text-green-500 dark:text-green-500",
          icon: {
            base: "flex-shrink-0 w-5 h-5",
            color: "text-green-500 dark:text-green-500",
          },
        },
      });
    }
  } catch (error) {
    load.bool = true
    load.label = ''
    load.icon = 'i-line-md-loading-loop'
    load.isDisable = true

    toast.add({
      title: "Please complete the form before submitting.",
      icon: "i-mdi-alert-circle",
      timeout: timeoutDuration,
      callback: () => {
        load.bool = false
        load.label = 'Send Message'
        load.icon = 'i-ic-sharp-send'
        load.isDisable = false
      },
      ui: {
        background: "dark:bg-gray-900 bg-gray-200",
        progress: {
          background: "dark:bg-red-600 bg-red-500 rounded-full",
        },
        ring: "ring-0",
        title: "text-sm font-medium text-red-500 dark:text-red-600",
        icon: {
          base: "flex-shrink-0 w-5 h-5",
          color: "text-red-500 dark:text-red-600",
        },
      },
    });
  }
};


</script>
