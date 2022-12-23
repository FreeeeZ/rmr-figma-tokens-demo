<template>
  <component
    :is="headingType"
    v-bind="$attrs"
    class="app-heading"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
defineProps({
  headingType: {
    type: String,
    required: true,
    validator (value: string) {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
    },
  }
});
</script>
