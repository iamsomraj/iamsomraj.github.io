<template>
  <button
    class="rounded-lg bg-skin py-2 px-3 font-bold text-ash transition-all duration-300 dark:bg-ash dark:text-skin md:py-4 md:px-6"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SecondaryButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
