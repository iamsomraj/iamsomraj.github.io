<template>
  <base-section>
    <div class="grid gap-6 md:grid-cols-3">
      <skill-item v-for="skill in skills" :key="skill.id" :skill="skill" />
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
    skills() {
      return this.$store.getters['skills-section/skills']
    },
  },
}
</script>
