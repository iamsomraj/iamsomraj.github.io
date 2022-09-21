<template>
  <base-section>
    <div
      class="flex w-full flex-col items-center justify-start space-y-4 md:space-y-8"
    >
      <!-- Begin: Skill Header -->
      <primary-text text="Skills" />
      <!-- End: Skill Header -->

      <!-- Begin: Skill List -->
      <div class="grid w-full grid-cols-2 gap-6 md:w-1/2 md:grid-cols-1">
        <skill-item
          v-for="skill in filteredSkills"
          :key="skill.id"
          :skill="skill"
        />
      </div>
      <!-- End: Skill List -->
    </div>
  </base-section>
</template>

<script>
import BaseSection from '../user-interface/base-section.vue'
import PrimaryText from '../user-interface/primary-text.vue'
import SkillItem from './skill-item.vue'

export default {
  name: 'SkillsSection',
  components: { BaseSection, SkillItem, PrimaryText },
  computed: {
    filteredSkills() {
      const skills = this.$store.getters['skills-section/skills']
      const skillsCopy = [...skills]
      return skillsCopy.sort((a, b) => b.progress - a.progress)
    },
  },
}
</script>
