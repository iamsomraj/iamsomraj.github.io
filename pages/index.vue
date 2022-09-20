<template>
  <div class="h-screen w-screen snap-y snap-mandatory overflow-scroll">
    <!-- Hero Section -->
    <hero-section />
    <!-- Skills Section -->
    <skills-section />
  </div>
</template>

<script>
import HeroSection from '~/components/hero-section/Main.vue'
import SkillsSection from '~/components/skills-section/Main.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    SkillsSection,
  },
  mounted() {
    this.$store.dispatch('theme/handleTheme')
  },
}
</script>
