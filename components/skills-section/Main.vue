<template>
  <base-section>
    <div class="flex flex-col items-center justify-start">
      <!-- Begin: Skill Section Header -->
      <h2
        class="mb-20 font-glacial-bold text-2xl font-bold tracking-wider text-dark dark:text-skin"
      >
        TECHNICAL SKILLS
      </h2>
      <!-- End: Skill Section Header -->

      <!-- Begin: Skill List -->
      <div class="grid gap-6 md:grid-cols-3">
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
import SkillItem from './skill-item.vue'
export default {
  name: 'SkillsSection',
  components: { BaseSection, SkillItem },
  computed: {
    filteredSkills() {
      const skills = this.$store.getters['skills-section/skills']
      const skillsCopy = [...skills]
      return skillsCopy.sort((a, b) => b.progress - a.progress)
    },
  },
}
</script>
