<template>
  <div class="flex min-h-screen w-screen items-center justify-center bg-skin">
    <!-- Begin: Image, Name and Designation -->
    <div class="flex flex-col items-center justify-start space-y-4">
      <!-- Begin: Image -->
      <div>
        <img
          :src="avatar_url"
          alt="An image example with Cloudinary"
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
    </div>
    <!-- End: Image, Name and Designation -->
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
    avatar_url() {
      const avatar = this.$store.getters['hero-section/avatar_url']
      return this.$cloudinary.image.url(avatar)
    },
  },
}
</script>
