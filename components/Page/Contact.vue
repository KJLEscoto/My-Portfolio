<template>
  <section class="w-full h-full flex flex-col gap-10">
    <div class="rounded-xl p-10 border border-gray-500/30 flex items-center justify-between w-full">
      <PageDetails header="Looking for a Front-end Web Developer?" header-class="text-xl font-semibold">
        <p class="text-sm w-full">
          I’m always open to address all your inquiries. Let’s connect on
          <span class="text-dark-blue font-semibold">LinkedIn</span>
          to discuss your project in more detail and explore how I can contribute to its success as your dedicated Web
          Developer.
        </p>
      </PageDetails>

      <div class="w-[80%] flex justify-end">
        <Button @click="connect" label="Connect with me" btype="primary" left-icon="i-vaadin-handshake" />
      </div>
    </div>

    <Divider />

    <div class="grid md:grid-cols-2 grid-cols-1 gap-20">
      <section class="w-full space-y-10">
        <PageDetails subheader="Hire Me" header="Let’s work together on your next project.">
          I’m passionate about exploring exciting opportunities, engaging in meaningful discussions, and building strong
          professional connections. Let’s discuss and create something amazing together!
        </PageDetails>

        <div class="space-y-3">
          <p>Contact me via Email</p>
          <div
            class="rounded flex items-center justify-between px-5 py-3 text-gray-500 border border-gray-500/30 text-sm bg-gray-500/10">
            <section class="flex items-center gap-2">
              <UIcon class="h-6 w-6" name="i-ic-round-email" />
              <p class="tracking-wider" id="personal_email">kin.webb.1024@gmail.com</p>
            </section>

            <button :class="{ 'opacity-60 cursor-not-allowed': isDisabled }" @click="copy" :disabled="isDisabled"
              class="flex items-center gap-1 text-xs py-2 px-3 bg-gray-500/10 rounded hover:opacity-60 select-none">
              <p>Copy</p>
              <UIcon name="i-lucide-copy" />
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <p>Follow me on social media</p>
          <section class="flex items-center gap-3">
            <NuxtLink target="_blank" :to="social.link" v-for="social in socials" :key="social.link"
              class="border border-gray-500/30 rounded-full flex items-center p-2 hover:border-white justify-center">
              <UIcon class="w-5 h-5 text-white" :name="social.icon" />
            </NuxtLink>
          </section>
        </div>
      </section>

      <section class="w-full h-auto">
        <form @submit.prevent="submitForm" class="space-y-5">
          <!-- <FormGroup group="normal" label="email address" attribute="email_address" type="email"
            v-model="formData.email_address" />
          <FormGroup group="textarea" label="message" attribute="message" v-model="formData.message" /> -->

          <!-- Name -->
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
            <Button v-if="!load.bool" :isDisabled="load.isDisable" type="submit" :label="load.label" btype="primary"
              :right-icon="load.icon" />
            <Button v-else :isDisabled="load.isDisable" :label="load.label" btype="primary"
              :right-icon="load.icon" />
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
  {
    icon: 'i-proicons-x-twitter',
    link: 'https://x.com/_foetaka',
  },
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
            background: "dark:bg-gray-900 bg-white",
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
          background: "dark:bg-gray-900 bg-white",
          progress: {
            background: "dark:bg-green-500 bg-gray-900 rounded-full",
          },
          ring: "ring-0",
          title: "text-sm font-medium text-gray-900 dark:text-green-500",
          icon: {
            base: "flex-shrink-0 w-5 h-5",
            color: "text-gray-900 dark:text-green-500",
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
        background: "dark:bg-gray-900 bg-white",
        progress: {
          background: "dark:bg-red-600 bg-gray-900 rounded-full",
        },
        ring: "ring-0",
        title: "text-sm font-medium text-gray-900 dark:text-red-600",
        icon: {
          base: "flex-shrink-0 w-5 h-5",
          color: "text-gray-900 dark:text-red-600",
        },
      },
    });
  }
};


</script>
