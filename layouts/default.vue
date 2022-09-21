<template>
  <div>
    <nav-bar />
    <Nuxt />
  </div>
</template>

<script>
import NavBar from '../components/nav-bar/Main.vue'
export default {
  name: 'DefaultLayout',
  components: { NavBar },
}
</script>
