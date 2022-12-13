<template>
  <button
    class="app-button button"
    :class="`button-${buttonType}`"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  buttonType: {
    type: String,
    required: true,
    validator (value: string) {
      return ['primary', 'primary-with-icon'].includes(value);
    },
  }
});
</script>

<style lang="scss" scoped>
@use './styles/app-button';
</style>
