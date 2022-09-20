<template>
  <div
    class="flex items-center justify-center space-x-2 transition-all duration-500"
    @click="toggleTheme"
  >
    <moon-icon
      class="h-6 w-6 cursor-pointer fill-skin transition-all duration-300"
      :class="{ hidden: !isDarkMode }"
    ></moon-icon>
    <sun-icon
      class="h-6 w-6 cursor-pointer stroke-ash transition-all duration-300"
      :class="{ hidden: isDarkMode }"
    ></sun-icon>
  </div>
</template>

<script>
import MoonIcon from '../../assets/vue-icons/MoonIcon.vue'
import SunIcon from '../../assets/vue-icons/SunIcon.vue'

export default {
  name: 'ThemeButton',
  components: { MoonIcon, SunIcon },
  computed: {
    theme() {
      return this.$store.getters['theme/theme']
    },
    isDarkMode() {
      return this.$store.getters['theme/isDarkTheme']
    },
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('theme/toggleTheme')
    },
  },
}
</script>
