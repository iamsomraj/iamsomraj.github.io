<template>
  <base-section>
    <div
      class="flex w-full flex-col items-center justify-start space-y-4 md:space-y-8"
    >
      <!-- Begin: Work Experience Section Header -->
      <primary-text text="Work Experience" />
      <!-- End: Work Experience Section Header -->
    </div>
  </base-section>
</template>

<script>
import BaseSection from '../user-interface/base-section.vue'
import PrimaryText from '../user-interface/primary-text.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseSection,
    PrimaryText,
  },
  computed: {},
}
</script>
