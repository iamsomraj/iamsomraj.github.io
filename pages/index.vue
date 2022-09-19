<template>
  <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll">
    <!-- Hero Section -->
    <hero-section />
  </div>
</template>

<script>
import HeroSection from '~/components/hero-section/Main.vue'
export default {
  name: 'IndexPage',
  components: {
    HeroSection,
  },
}
</script>
