<template>
  <div
    class="flex flex-col items-start justify-start space-y-2 rounded-lg border border-ash p-6 dark:border-skin"
  >
    <!-- Begin: Skill Logo -->
    <div
      class="flex h-12 w-12 items-center justify-center rounded-lg bg-ash text-skin transition-all duration-300 dark:bg-skin dark:text-ash"
    >
      <StarIcon class="h-12 w-12 flex-shrink-0 fill-skin dark:fill-ash" />
    </div>
    <!-- End: Skill Logo -->

    <!-- Begin: Skill Name -->
    <h3
      class="font-glacial-bold text-2xl font-bold uppercase tracking-wider text-dark dark:text-skin"
    >
      {{ name }}
    </h3>
    <!-- End: Skill Name -->

    <!-- Begin: Skill Progress Bar -->
    <div
      class="flex w-full items-center justify-start border border-ash dark:border-skin"
    >
      <div
        class="h-4 w-full bg-ash dark:bg-skin"
        :style="{ width: `${progress}%` }"
      ></div>
      <div
        class="h-4 w-full bg-skin dark:bg-ash"
        :style="{
          width: `${100 - progress}%`,
        }"
      ></div>
    </div>
    <!-- End: Skill Progress Bar -->

    <!-- Begin: Skill Description -->
    <p class="text-base font-light leading-relaxed text-dark dark:text-skin">
      {{ description }}
    </p>
    <!-- End: Skill Description -->
  </div>
</template>

<script>
import StarIcon from '../../assets/vue-icons/StarIcon.vue'
export default {
  name: 'SkillItem',
  components: { StarIcon },
  props: {
    skill: {
      type: Object,
      required: true,
      validator: (value) => {
        return value.name && value.description && value.progress
      },
    },
  },
  computed: {
    name() {
      return this.skill.name
    },
    description() {
      return this.skill.description
    },
    progress() {
      return this.skill.progress
    },
  },
}
</script>
