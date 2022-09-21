<template>
  <base-section>
    <!-- Begin: Image, Name, Designation and Description -->
    <div class="flex flex-col items-center justify-start space-y-4">
      <!-- Begin: Image -->
      <div
        class="flex h-28 w-28 flex-shrink-0 items-center justify-center rounded-full border-4 border-ash dark:border-skin"
      >
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
      <primary-text :text="name" />
      <!-- End: Name -->

      <!-- Begin: Designation -->
      <secondary-text :text="designation" />
      <!-- End: Designation -->

      <!-- Begin: Description -->
      <p class="max-w-lg text-center text-lg text-dark dark:text-skin">
        {{ description }}
      </p>
      <!-- End: Description -->

      <!-- Begin: Buttons -->
      <div class="flex flex-col items-center justify-center space-y-4 pt-12">
        <!-- Begin: Primary Button -->
        <secondary-button :label="'Contact Me'" />
        <!-- End: Primary Button -->
      </div>
      <!-- End: Buttons -->
    </div>
    <!-- End: Image, Name, Designation and Description -->
  </base-section>
</template>

<script>
import BaseSection from '../user-interface/base-section.vue'
import PrimaryText from '../user-interface/primary-text.vue'
import SecondaryButton from '../user-interface/secondary-button.vue'
import SecondaryText from '../user-interface/secondary-text.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseSection,
    PrimaryText,
    SecondaryText,
    SecondaryButton,
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
