<template>
  <main class="main-content">
    <div :class="`${String(route?.name)}-page`.toLowerCase()">
      <router-view />
    </div>
  </main>
  <div class="main-content__badge">
    <div class="main-content__badge__content">
      {{ OTHER_TEXTS.copyrightText }} © {{currentYear}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import { OTHER_TEXTS } from "@/contants/other-texts";

const route = useRoute();
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use './styles/index.scss';
</style>
