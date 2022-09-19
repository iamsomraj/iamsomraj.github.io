<template>
  <button
    class="underline-offset-4 rounded-lg bg-skin py-2 px-3 font-bold uppercase tracking-wider text-ash transition-all duration-300 hover:underline dark:bg-ash dark:text-skin md:py-4 md:px-6"
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
