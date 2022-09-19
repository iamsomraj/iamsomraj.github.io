<template>
  <button
    class="underline-offset-4 rounded-lg bg-ash py-4 px-6 font-bold uppercase tracking-wider text-skin transition-all duration-300 hover:underline dark:bg-skin dark:text-ash"
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
