<template>
  <component
    :is="headingType"
    v-bind="$attrs"
    class="app-heading"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  headingType: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use './styles/app-heading';
</style>
