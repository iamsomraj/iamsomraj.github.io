<template>
  <h3 class="text-2xl text-dark dark:text-skin" :class="`text-${align}`">
    {{ text }}
  </h3>
</template>

<script>
export default {
  name: 'SecondaryText',
  props: {
    text: {
      type: String,
      required: true,
    },
    align: {
      type: String,
      default: 'center',
      validator: (value) => ['left', 'center', 'right'].includes(value),
    },
  },
}
</script>
