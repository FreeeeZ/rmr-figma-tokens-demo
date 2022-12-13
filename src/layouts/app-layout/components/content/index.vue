<template>
  <main class="main-content">
    <div :class="`${String(route?.name)}-page`.toLowerCase()">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
@use 'styles/index.scss';
</style>
