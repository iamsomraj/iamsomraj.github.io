<template>
  <div class="z-20">
    <div
      class="my-blur fixed top-1/2 left-1/2 h-56 w-56 animate-blob rounded-full bg-muddy opacity-70 mix-blend-darken filter dark:bg-muddy dark:mix-blend-overlay"
    ></div>
    <div
      class="animation-delay-2000 my-blur fixed top-1/2 right-1/2 h-56 w-56 animate-blob rounded-full bg-yellowish opacity-70 mix-blend-darken filter dark:bg-yellowish dark:mix-blend-overlay"
    ></div>
    <div
      class="animation-delay-4000 my-blur fixed bottom-1/3 left-1/3 h-56 w-56 animate-blob rounded-full bg-orangy opacity-70 mix-blend-darken filter dark:bg-orangy dark:mix-blend-overlay"
    ></div>
  </div>
</template>
‰

<script>
export default {
  name: 'BackgroundBlob',
}
</script>

<style scoped>
.my-blur {
  filter: blur(24px);
}
</style>
