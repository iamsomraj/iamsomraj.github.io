<template>
  <div class="items-center justify-between space-y-4 rounded-lg md:flex">
    <!-- Begin: Skill Name -->
    <h3
      class="w-full font-glacial-bold text-2xl font-bold uppercase tracking-wider text-dark dark:text-skin md:w-1/2"
    >
      {{ name }}
    </h3>
    <!-- End: Skill Name -->

    <!-- Begin: Skill Progress Bar -->
    <skill-progress-bar
      class="w-full md:w-1/2"
      :progress="progress"
    ></skill-progress-bar>
    <!-- End: Skill Progress Bar -->
  </div>
</template>

<script>
import SkillProgressBar from './skill-progress-bar.vue'
export default {
  name: 'SkillItem',
  components: { SkillProgressBar },
  props: {
    skill: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && value.progress
      },
    },
  },
  computed: {
    name() {
      return this.skill.name
    },
    progress() {
      return this.skill.progress
    },
  },
}
</script>
