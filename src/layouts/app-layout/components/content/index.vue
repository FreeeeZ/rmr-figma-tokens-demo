<template>
  <main class="main-content">
    <div :class="`${String(route?.name)}-page`.toLowerCase()">
      <router-view />
    </div>
    <div class="top-right-badge">
      <div class="top-right-badge__content">
        {{ OTHER_TEXTS.copyrightText }} © {{currentYear}}
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

import { OTHER_TEXTS } from "@/contants/other-texts";

const route = useRoute();
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
@use 'styles/index.scss';
</style>
