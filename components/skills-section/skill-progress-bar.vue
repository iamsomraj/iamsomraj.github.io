<template>
  <div
    class="flex items-center justify-start border border-ash dark:border-skin"
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
</template>

<script>
export default {
  name: 'SkillProgressBar',
  props: {
    progress: {
      type: Number,
      required: true,
      validator: (value) => {
        return value >= 0 && value <= 100
      },
    },
  },
}
</script>
