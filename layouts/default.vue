<template>
  <base-page class="relative">
    <nav-bar />
    <Nuxt />
    <background-blob />
  </base-page>
</template>

<script>
import NavBar from '../components/nav-bar/Main.vue'
import BackgroundBlob from '../components/user-interface/background-blob.vue'
import BasePage from '../components/user-interface/base-page.vue'

export default {
  name: 'DefaultLayout',
  components: { NavBar, BackgroundBlob, BasePage },
}
</script>
