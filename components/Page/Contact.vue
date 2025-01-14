<template>
  <section class="w-full h-full flex flex-col gap-14">
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
        <Button label="Connect with me" btype="primary" left-icon="i-vaadin-handshake" />
      </div>
    </div>

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
              <p class="tracking-wider" id="email">kin.webb.1024@gmail.com</p>
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
            <NuxtLink target="_blank" :to="social.link" v-for="social in socials"
              class="border border-gray-500/30 rounded-full flex items-center p-2 hover:border-white justify-center">
              <UIcon class="w-5 h-5 text-white" :name="social.icon" />
            </NuxtLink>
          </section>
        </div>
      </section>

      <section class="w-full h-auto">
        <form action="" class="space-y-5">
          <FormGroup group="normal" label="name" attribute="name" type="text" />
          <FormGroup group="normal" label="email address" attribute="email_address" type="email" />
          <FormGroup group="textarea" label="message" attribute="message" />
          <div class="w-full flex justify-end">
            <Button :class="{ 'opacity-60 cursor-not-allowed': isDisabled }" :disabled="isDisabled" @click="messageSent"
              type="submit" label="Send Message" btype="primary" right-icon="i-ic-sharp-send" />
          </div>
        </form>
      </section>
    </div>
  </section>
</template>

<script setup>
const toast = useToast();

const socials = [
  {
    icon: 'i-mage-facebook',
    link: '/#',
  },
  {
    icon: 'i-hugeicons-instagram',
    link: '/#',
  },
  {
    icon: 'i-proicons-x-twitter',
    link: '/#',
  },
  {
    icon: 'i-bxl-linkedin',
    link: '/#',
  },  
  {
    icon: 'i-mdi-github',
    link: '/#',
  },
]

const isDisabled = ref(false);
const timeoutDuration = 2500;

const copy = () => {
  if (isDisabled.value) return; // Prevent multiple clicks

  const emailElement = document.getElementById("email");
  const email = emailElement?.textContent || "";

  if (email) {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        isDisabled.value = true; // Disable the button
        toast.add({
          title: "Email Copied",
          icon: "i-lucide-copy-check",
          timeout: timeoutDuration,
          callback: () => (isDisabled.value = false), // Re-enable after toast
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
            default: {
              icon: null,
              closeButton: {
                icon: "i-heroicons-x-mark-20-solid",
                color: "white",
                variant: "link",
                padded: false,
              },  
            },
          },
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
};

const messageSent = () => {
  if (isDisabled.value) return; // Prevent multiple clicks
  
  toast.add({
    title: "Message Sent!",
    icon: "i-mdi-send-check",
    timeout: timeoutDuration,
    callback: () => (isDisabled.value = false), // Re-enable after toast
    ui: {
      background: "dark:bg-green-700 bg-white",
      progress: {
        background: "dark:bg-white bg-gray-900 rounded-full",
      },
      ring: "ring-0",
      title: "text-sm font-medium text-gray-900 dark:text-white",
      icon: {
        base: "flex-shrink-0 w-5 h-5",
        color: "text-gray-900 dark:text-white",
      },
      default: {
        icon: null,
        closeButton: {
          icon: "i-heroicons-x-mark-20-solid",
          color: "white",
          variant: "link",
          padded: false,
        },
      },
    },
  });
}
</script>
