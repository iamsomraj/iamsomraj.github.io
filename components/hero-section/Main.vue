<template>
  <base-section class="relative">
    <!-- Begin: Image, Name, Designation and Description -->
    <div class="flex flex-col items-center justify-start space-y-4">
      <!-- Begin: Image -->
      <div>
        <img
          :src="avatar_url"
          alt="Somraj Mukherjee Avatar Image"
          class="h-24 w-24 flex-shrink-0 rounded-full object-cover transition-all duration-300"
          :class="{
            'opacity-60': isDarkMode,
            'opacity-90': !isDarkMode,
          }"
        />
      </div>
      <!-- End: Image -->

      <!-- Begin: Name -->
      <h1
        class="text-center font-glacial-bold text-4xl font-bold text-dark dark:text-skin"
      >
        {{ name }}
      </h1>
      <!-- End: Name -->

      <!-- Begin: Designation -->
      <h2 class="text-2xl text-dark dark:text-skin">
        {{ designation }}
      </h2>
      <!-- End: Designation -->

      <!-- Begin: Description -->
      <p class="max-w-lg text-center text-lg text-dark dark:text-skin">
        {{ description }}
      </p>
      <!-- End: Description -->

      <!-- Begin: Buttons -->
      <div class="flex flex-col items-center justify-center space-y-4 pt-12">
        <!-- Begin: Primary Button -->
        <primary-button :label="'Contact Me'" />
        <!-- End: Primary Button -->
      </div>
      <!-- End: Buttons -->
    </div>
    <!-- End: Image, Name, Designation and Description -->

    <!-- Begin: Top Header Section - Logo and Get MY CV button -->
    <div
      class="absolute top-0 flex h-24 w-full items-center justify-between px-12"
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
        <secondary-button :label="'Get My CV'" />
        <!-- End: Get My CV button -->
      </div>
      <!-- End: Theme and Get My CV Button -->
    </div>
    <!-- End: Top Header Section - Logo and Get MY CV button -->
  </base-section>
</template>

<script>
import BaseLogo from '../user-interface/base-logo.vue'
import PrimaryButton from '../user-interface/primary-button.vue'
import SecondaryButton from '../user-interface/secondary-button.vue'
import ThemeButton from '../user-interface/theme-button.vue'
import BaseSection from '../user-interface/base-section.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseLogo,
    PrimaryButton,
    SecondaryButton,
    ThemeButton,
    BaseSection,
  },
  computed: {
    name() {
      return this.$store.getters['hero-section/name']
    },
    designation() {
      return this.$store.getters['hero-section/designation']
    },
    description() {
      return this.$store.getters['hero-section/description']
    },
    avatar_url() {
      const avatarSepia = this.$store.getters['hero-section/avatar_sepia']
      const avatarGrayscale =
        this.$store.getters['hero-section/avatar_grayscale']
      if (this.isDarkMode) {
        return this.$cloudinary.image.url(avatarSepia)
      } else {
        return this.$cloudinary.image.url(avatarGrayscale)
      }
    },
    isDarkMode() {
      return this.$store.getters['theme/isDarkTheme']
    },
  },
}
</script>
