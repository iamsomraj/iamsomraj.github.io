<template>
  <!-- Begin: Index Page -->
  <base-page>
    <!-- Begin: Hero Section -->
    <hero-section />
    <!-- End: Hero Section -->

    <!-- Begin: Skills Section -->
    <skills-section />
    <!-- End: Skills Section -->

    <!-- Begin: Work Experience Section -->
    <work-experience-section />
    <!-- End: Work Experience Section -->
  </base-page>
  <!-- End: Index Page -->
</template>

<script>
import HeroSection from '~/components/hero-section/Main.vue'
import SkillsSection from '~/components/skills-section/Main.vue'
import WorkExperienceSection from '~/components/work-experience-section/Main.vue'
import BasePage from '~/components/user-interface/base-page.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    SkillsSection,
    WorkExperienceSection,
    BasePage,
  },
  mounted() {
    this.$store.dispatch('theme/handleTheme')
  },
}
</script>
