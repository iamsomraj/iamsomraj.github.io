<template>
  <button
    class="rounded-lg bg-skin py-4 px-6 font-bold text-ash transition-all duration-500 hover:bg-ash hover:text-skin active:bg-ash active:text-skin"
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
