<template>
  <div
    class="snap-start relative flex min-h-screen w-screen items-center justify-center bg-skin"
  >
    <!-- Begin: Image, Name, Designation and Description -->
    <div class="flex flex-col items-center justify-start space-y-4">
      <!-- Begin: Image -->
      <div>
        <img
          :src="avatar_url"
          alt="Somraj Mukherjee Avatar Image"
          class="h-32 w-32 flex-shrink-0 rounded-full object-cover sepia filter"
        />
      </div>
      <!-- End: Image -->

      <!-- Begin: Name -->
      <h1 class="font-glacial-bold text-4xl font-bold text-dark">
        {{ name }}
      </h1>
      <!-- End: Name -->

      <!-- Begin: Designation -->
      <h2 class="text-2xl text-dark">
        {{ designation }}
      </h2>
      <!-- End: Designation -->

      <!-- Begin: Description -->
      <p class="max-w-xl text-center text-lg text-ash">
        {{ description }}
      </p>
      <!-- End: Description -->
    </div>
    <!-- End: Image, Name, Designation and Description -->

    <!-- Begin: Top Header Section - Logo and Get MY CV button -->
    <div
      class="absolute top-0 flex h-36 w-full items-center justify-between bg-red-300"
    >
      <!-- Begin: Logo -->
      <div></div>
      <!-- End: Logo -->

      <!-- Begin: Get My CV button -->
      <div></div>
      <!-- End: Get My CV button -->
    </div>
    <!-- End: Top Header Section - Logo and Get MY CV button -->
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
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
