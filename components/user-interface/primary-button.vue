<template>
  <button
    class="rounded-lg bg-ash py-2 px-3 font-bold text-skin transition-all duration-300 dark:bg-skin dark:text-ash md:py-4 md:px-6"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
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
