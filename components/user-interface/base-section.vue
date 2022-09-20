<template>
  <div
    class="flex min-h-screen w-screen snap-start items-center justify-center bg-skin px-6 transition-all duration-300 dark:bg-ash dark:text-skin"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseSection',
}
</script>
