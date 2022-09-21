<template>
  <!-- Begin: Top Header Section - Logo and Get MY CV button -->
  <div
    class="fixed top-0 z-10 flex w-full items-center justify-between bg-skin px-12 py-6 dark:bg-ash"
  >
    <!-- Begin: Logo -->
    <base-logo />
    <!-- End: Logo -->

    <!-- Begin: Theme and Get My CV Button -->
    <div class="flex items-center justify-between space-x-2">
      <!-- Begin: Theme Button for Switching Modes -->
      <ThemeButton />
      <!-- End: Theme Button for Switching Modes -->
      <!-- Begin: Get My CV button -->
      <primary-button :label="'Get My CV'" />
      <!-- End: Get My CV button -->
    </div>
    <!-- End: Theme and Get My CV Button -->
  </div>
  <!-- End: Top Header Section - Logo and Get MY CV button -->
</template>

<script>
import BaseLogo from '../user-interface/base-logo.vue'
import PrimaryButton from '../user-interface/primary-button.vue'
import ThemeButton from '../user-interface/theme-button.vue'

export default {
  name: 'NavBar',
  components: {
    ThemeButton,
    BaseLogo,
    PrimaryButton,
  },
}
</script>
