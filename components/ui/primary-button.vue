<template>
  <button
    class="rounded-lg bg-ash py-4 px-6 font-bold text-skin transition-all duration-500 hover:bg-skin hover:text-ash active:bg-skin active:text-ash"
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
