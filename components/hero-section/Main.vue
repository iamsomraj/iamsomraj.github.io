<template>
  <div
    class="snap-start relative flex min-h-screen w-screen items-center justify-center bg-skin px-12"
  >
    <!-- Begin: Image, Name, Designation and Description -->
    <div class="flex flex-col items-center justify-start space-y-4">
      <!-- Begin: Image -->
      <div>
        <img
          :src="avatar_url"
          alt="Somraj Mukherjee Avatar Image"
          class="h-32 w-32 flex-shrink-0 rounded-full object-cover opacity-90 grayscale filter"
        />
      </div>
      <!-- End: Image -->

      <!-- Begin: Name -->
      <h1 class="text-center font-glacial-bold text-4xl font-bold text-dark">
        {{ name }}
      </h1>
      <!-- End: Name -->

      <!-- Begin: Designation -->
      <h2 class="text-2xl text-dark">
        {{ designation }}
      </h2>
      <!-- End: Designation -->

      <!-- Begin: Description -->
      <p class="max-w-lg text-center text-lg text-ash">
        {{ description }}
      </p>
      <!-- End: Description -->

      <!-- Begin: Buttons -->
      <div class="flex flex-col items-center justify-center space-y-4">
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

      <!-- Begin: Get My CV button -->
      <secondary-button :label="'Get My CV'" />
      <!-- End: Get My CV button -->
    </div>
    <!-- End: Top Header Section - Logo and Get MY CV button -->
  </div>
</template>

<script>
import BaseLogo from '../ui/base-logo.vue'
import PrimaryButton from '../ui/primary-button.vue'
import SecondaryButton from '../ui/secondary-button.vue'

export default {
  name: 'HeroSection',
  components: { BaseLogo, PrimaryButton, SecondaryButton },
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
      const avatar = this.$store.getters['hero-section/avatar_url']
      return this.$cloudinary.image.url(avatar)
    },
  },
}
</script>
