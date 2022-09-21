<template>
  <h1
    class="font-glacial-bold text-4xl font-bold uppercase leading-relaxed tracking-wider text-dark dark:text-skin"
    :class="`text-${align}`"
  >
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'PrimaryText',
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
