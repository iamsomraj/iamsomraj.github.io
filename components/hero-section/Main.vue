<template>
  <div class="bg-skin min-h-screen w-screen flex justify-center items-center">
    <!-- Begin: Image, Name and Designation -->
    <div class="flex flex-col justify-start items-center space-y-4">
      <!-- Begin: Image -->
      <div>
        <div class="w-32 h-32 rounded-full bg-gray-400" />
      </div>
      <!-- End: Image -->

      <!-- Begin: Name -->
      <h1 class="text-4xl font-bold font-glacial-bold text-dark">
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
  },
}
</script>
