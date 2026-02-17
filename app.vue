<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
</template>

<script setup>
if (process.client) {
  const script = document.createElement('script');
  script.src = 'https://bubblet.app/plugin.js';
  script.type = 'text/javascript';
  script.setAttribute('data-key', 'oC9GBsdxMTcMWqNHEShZkQS5iyx2');
  script.setAttribute('data-primary', '#f5f5f5');
  script.setAttribute('data-base', '#111111');
  script.setAttribute('data-neutral', '#252525');
  script.setAttribute('data-text', '#ffffff');
  script.setAttribute('data-anchor', 'bottom right');
  script.setAttribute('data-size', 'md');
  script.setAttribute('data-fontfamily', 'Geist');
  script.setAttribute('data-zindex', '9999');
  script.async = true;
  document.body.appendChild(script);
}
</script>