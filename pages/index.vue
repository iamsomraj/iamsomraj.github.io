<template>
  <!-- Begin: Index Page -->
  <div>
    <!-- Begin: Hero Section -->
    <hero-section />
    <!-- End: Hero Section -->

    <!-- Begin: Skills Section -->
    <skills-section />
    <!-- End: Skills Section -->

    <!-- Begin: Work Experience Section -->
    <work-experience-section />
    <!-- End: Work Experience Section -->
  </div>
  <!-- End: Index Page -->
</template>

<script>
import HeroSection from '~/components/hero-section/Main.vue'
import SkillsSection from '~/components/skills-section/Main.vue'
import WorkExperienceSection from '~/components/work-experience-section/Main.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    SkillsSection,
    WorkExperienceSection,
  },
  mounted() {
    this.$store.dispatch('theme/handleTheme')
  },
}
</script>
